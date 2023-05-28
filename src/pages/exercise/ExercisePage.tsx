import { EditableTable } from "../../components/tables/EditableTable";
import {
  ExerciseData,
  ExerciseColumns,
} from "../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CreateExerciseForm } from "./content/CreateExerciseForm";
import { CreateModal } from "../../components/modals/CreateModal";
//TODO GET THESE WORKING
import { AddExerciseOptions } from "./content/AddExerciseOptions";
import { ExerciseDetailContent } from "./content/ExerciseDetailContent";

type Props = PropsWithChildren & {};

//TODO: Progressive overload calculations for bodybuilding exercises
//TODO: filter exercises
//TODO: add exercises by frequency
//TODO: be able to click on an exercise in list to bring up exercise detail

export const ExercisePage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Exercise Library</Typography>
      <EditableTable
        data={ExerciseData}
        columns={ExerciseColumns}
        checkboxSelection={true}
      />
      <CreateModal>
        <CreateExerciseForm />
      </CreateModal>
    </Box>
  );
};
