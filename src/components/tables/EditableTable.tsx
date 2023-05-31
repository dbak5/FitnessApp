import * as React from "react";
import {
  DataGrid,
  GridRowId,
  GridEventListener,
  GridCellModesModel,
} from "@mui/x-data-grid";
import { FC, PropsWithChildren } from "react";
import { EditableTableToolbar } from "./EditableTableToolbar";

//TODO GET DELETE BUTTON WORKING
//TODO GET ADD BUTTON WORKING
//TODO GET CREATE NEW BUTTON WORKING

type Props = PropsWithChildren & {
  data: any[];
  columns: any[];
  checkboxSelection: boolean;
  addOptions: JSX.Element;
  detailContent: JSX.Element;
  createForm: JSX.Element;
};

interface SelectedCellParams {
  id: GridRowId;
  field: string;
}

export const EditableTable: FC<Props> = ({
  data,
  columns,
  checkboxSelection,
  addOptions,
  detailContent,
  createForm,
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
          toolbar: EditableTableToolbar,
        }}
        slotProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
            addOptions,
            detailContent,
            createForm,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
      />
    </div>
  );
};
