import { ListTable } from "../../components/tables/ListTable";
import {
  ExerciseData,
  ExerciseColumns,
} from "../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { EditButton } from "../../components/buttons/EditButton";
import { CreateExerciseForm } from "./content/CreateExerciseForm";
import { CreateModal } from "../../components/modals/CreateModal";
import { AddToCalendarModal } from "../../components/modals/AddToCalendarModal";
import { AddExerciseOptions } from "./content/AddExerciseOptions";
import { ExerciseDetailContent } from "./content/ExerciseDetailContent";
import { ViewDetailModal } from "../../components/modals/ViewDetailModal";

type Props = PropsWithChildren & {};

//TODO: Progressive overload calculations for bodybuilding exercises
//TODO: filter exercises
//TODO: add exercises by frequency
//TODO: be able to click on an exercise in list to bring up exercise detail

export const ExercisePage: FC<Props> = ({ children }) => {
  const activity = "exercise";

  return (
    <Box>
      <Typography variant="h1">Exercise Library</Typography>
      <ListTable
        data={ExerciseData}
        columns={ExerciseColumns}
        checkboxSelection={true}
      />
      <CreateModal>
        <CreateExerciseForm />
      </CreateModal>
      <AddToCalendarModal>
        <AddExerciseOptions />
      </AddToCalendarModal>
      <EditButton link="/editexercise" activity={activity} />
      <ViewDetailModal link="/editexercise" activity={activity}>
        <ExerciseDetailContent />
      </ViewDetailModal>
    </Box>
  );
};
