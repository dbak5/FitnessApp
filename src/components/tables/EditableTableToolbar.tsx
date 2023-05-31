import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { GridRowId, GridCellModes, GridCellModesModel } from "@mui/x-data-grid";
import { FC, PropsWithChildren } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { AddToCalendarModal } from "../../components/modals/AddToCalendarModal";
import { ViewDetailModal } from "../../components/modals/ViewDetailModal";
import { CreateModal } from "../../components/modals/CreateModal";

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
  page: "exercise" | "program";
  addOptions: JSX.Element;
  detailContent: JSX.Element;
  createForm: JSX.Element;
};

export const EditableTableToolbar: FC<EditToolbarProps> = ({
  selectedCellParams,
  cellMode,
  cellModesModel,
  setCellModesModel,
  link,
  activity,
  disabled,
  addOptions,
  detailContent,
  createForm,
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
        {detailContent}
      </ViewDetailModal>

      <CreateModal>{createForm}</CreateModal>
    </Box>
  );
};
