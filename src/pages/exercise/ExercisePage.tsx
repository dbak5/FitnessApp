import { EditableTable } from "../../components/tables/EditableTable";
import {
  ExerciseLibraryData,
  ExerciseLibraryColumns,
} from "../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import { CreateExerciseForm } from "../../pages/exercise/content/CreateExerciseForm";
import { AddExerciseOptions } from "../../pages/exercise/content/AddExerciseOptions";
import { ExerciseDetailContent } from "../../pages/exercise/content/ExerciseDetailContent";

type Props = PropsWithChildren & {};

//TODO: Progressive overload calculations for bodybuilding exercises
//TODO: filter exercises
//TODO: add exercises by frequency
//TODO: be able to click on an exercise in list to bring up exercise detail

export const ExercisePage: FC<Props> = () => {
  return (
    <>
      <Typography variant="h1">Exercise Library</Typography>
      <EditableTable
        data={ExerciseLibraryData}
        columns={ExerciseLibraryColumns}
        checkboxSelection={true}
        addOptions={<AddExerciseOptions />}
        detailContent={<ExerciseDetailContent />}
        createForm={<CreateExerciseForm />}
        saveButton
        addToCalendarModal
        viewDetailModal
        createModal
      />
    </>
  );
};
