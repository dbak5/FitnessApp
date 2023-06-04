import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import { EditableTable } from "../../components/tables/EditableTable";
import {
  WorkoutColumnsExample,
  WorkoutExample,
} from "../../assets/dummy/WorkoutExample";
import { AddWorkoutOptions } from "./content/AddWorkoutOptions";
import { ExerciseDetailContent } from "../exercise/content/ExerciseDetailContent";
import { Button } from "@mui/material";

type Props = PropsWithChildren & {};

// TO DO: Somehow denote if there is a failed or made lift

export const WorkoutSessionPage: FC<Props> = () => {
  return (
    <>
      <Typography variant="body1">
        <EditableTable
          data={WorkoutExample}
          columns={WorkoutColumnsExample}
          checkboxSelection={false}
          addOptions={<AddWorkoutOptions />}
          detailContent={<ExerciseDetailContent />}
          saveButton
          addToWorkoutModal
          viewDetailModal
        ></EditableTable>
      </Typography>
      <Button>Complete workout</Button>
    </>
  );
};
