import * as React from "react";
import Box from "@mui/material/Box";
import { GridRowId, GridCellModes, GridCellModesModel } from "@mui/x-data-grid";
import { FC, PropsWithChildren } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { AddToCalendarModal } from "../modals/AddToCalendarModal";
import { ViewDetailModal } from "../../components/modals/ViewDetailModal";
import { CreateModal } from "../../components/modals/CreateModal";
import { AddToWorkoutModal } from "../modals/AddToWorkoutModal";
import { BaseButton } from "../buttons/BaseButton";

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
  disabled?: boolean;
  page: "exercise" | "program";
  label: string;
  addOptions?: JSX.Element;
  detailContent?: JSX.Element;
  createForm?: JSX.Element;
  saveButton?: boolean;
  addToCalendarModal?: boolean;
  addToWorkoutModal?: boolean;
  viewDetailModal?: boolean;
  createModal?: boolean;
};

export const EditableTableToolbar: FC<EditToolbarProps> = ({
  selectedCellParams,
  cellMode,
  cellModesModel,
  setCellModesModel,
  link,
  activity,
  label,
  addOptions,
  detailContent,
  createForm,
  saveButton,
  addToWorkoutModal,
  addToCalendarModal,
  viewDetailModal,
  createModal,
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
    <Box>
      {saveButton && (
        <BaseButton
          onClick={handleSaveOrEdit}
          onMouseDown={handleMouseDown}
          disabled={!selectedCellParams}
          icon={cellMode === "edit" ? <SaveIcon /> : <EditIcon />}
        />
      )}

      <BaseButton
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === "view"}
        icon={<CancelIcon />}
      />

      <BaseButton disabled={!selectedCellParams} icon={<DeleteIcon />} />

      {addToCalendarModal && (
        <AddToCalendarModal label={"Add to calendar"}>
          {addOptions}
        </AddToCalendarModal>
      )}

      {addToWorkoutModal && (
        <AddToWorkoutModal label={"Add exercise"}>
          {addOptions}
        </AddToWorkoutModal>
      )}

      {viewDetailModal && (
        <ViewDetailModal
          disabled={!selectedCellParams}
          label={"View Detail"}
          link={link}
          activity={activity}
        >
          {detailContent}
        </ViewDetailModal>
      )}

      {createModal && (
        <CreateModal label="Create New">{createForm}</CreateModal>
      )}
    </Box>
  );
};
