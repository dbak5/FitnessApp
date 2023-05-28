import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  DataGrid,
  GridRowId,
  GridCellModes,
  GridEventListener,
  GridCellModesModel,
} from "@mui/x-data-grid";
import { FC, PropsWithChildren } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { AddToCalendarModal } from "../modals/AddToCalendarModal";
import { ViewDetailModal } from "../modals/ViewDetailModal";

//TODO GET DELETE BUTTON WORKING
//TODO GET ADD BUTTON WORKING

type Props = PropsWithChildren & {
  data: any[];
  columns: any[];
  checkboxSelection: boolean;
};

interface SelectedCellParams {
  id: GridRowId;
  field: string;
}

type EditToolbarProps = PropsWithChildren & {
  selectedCellParams?: SelectedCellParams;
  cellModesModel: GridCellModesModel;
  setCellModesModel: (value: GridCellModesModel) => void;
  cellMode: "view" | "edit";
  link: string;
  activity: string;
  disabled: boolean;
  addOptions: React.ReactNode;
  detailOptions: React.ReactNode;
};

export const EditToolbar: FC<EditToolbarProps> = ({
  selectedCellParams,
  cellMode,
  cellModesModel,
  setCellModesModel,
  link,
  activity,
  disabled,
  detailOptions,
  addOptions,
}) => {
  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === "edit") {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
      >
        {cellMode === "edit" ? <SaveIcon /> : <EditIcon />}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === "view"}
        sx={{ ml: 1 }}
      >
        <CancelIcon />
      </Button>

      <Button sx={{ ml: 1 }} disabled={!selectedCellParams}>
        <DeleteIcon />
      </Button>
      <AddToCalendarModal disabled={!selectedCellParams}>
        {addOptions}
      </AddToCalendarModal>
      <ViewDetailModal
        link={link}
        activity={activity}
        disabled={!selectedCellParams}
      >
        {detailOptions}
      </ViewDetailModal>
    </Box>
  );
};

export const EditableTable: FC<Props> = ({
  data,
  columns,
  checkboxSelection,
}) => {
  const [selectedCellParams, setSelectedCellParams] =
    React.useState<SelectedCellParams | null>(null);
  const [cellModesModel, setCellModesModel] =
    React.useState<GridCellModesModel>({});

  const handleCellFocus = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const row = event.currentTarget.parentElement;
      const id = row!.dataset.id!;
      const field = event.currentTarget.dataset.field!;
      setSelectedCellParams({ id, field });
    },
    []
  );

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback<GridEventListener<"cellKeyDown">>(
    (params, event) => {
      if (cellMode === "edit") {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  const handleCellEditStop = React.useCallback<
    GridEventListener<"cellEditStop">
  >((params, event) => {
    event.defaultMuiPrevented = true;
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection={checkboxSelection}
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        onCellEditStop={handleCellEditStop}
        onCellModesModelChange={(model) => setCellModesModel(model)}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
      />
    </div>
  );
};
