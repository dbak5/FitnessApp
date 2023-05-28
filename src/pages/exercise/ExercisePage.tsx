import { ListTable } from "../../components/tables/ListTable";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  ExerciseData,
  ExerciseColumns,
} from "../../assets/dummy/ExerciseExample";
import { AppModal } from "../../components/modals/AppModal";
import { AddExerciseOptions } from "./content/AddExerciseOptions";
import { CreateExerciseForm } from "./content/CreateExerciseForm";
import { ExerciseDetailContent } from "./content/ExerciseDetailContent";
import { AddButton } from "../../components/buttons/AddButton";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const ExercisePage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Typography variant="h1">Exercise Library</Typography>
      <ListTable
        data={ExerciseData}
        columns={ExerciseColumns}
        checkboxSelection={true}
      />
      <Typography variant="body1">
        TODO: Progressive overload calculations for bodybuilding exercises
      </Typography>
      <Typography variant="body1">TODO: filter exercises </Typography>
      <Typography variant="body1">TODO: add exercises by frequency </Typography>
      <Typography variant="body1">
        TODO: be able to click on an exercise in list to bring up exercise
        detail
      </Typography>
      <AppModal label="Create new">
        <CreateExerciseForm />
      </AppModal>
      <AppModal label="Add to calendar">
        <AddExerciseOptions />
        <AddButton />
      </AppModal>
      <Button>
        <NavLink to="/editexercise">Edit Exercise</NavLink>
      </Button>
      <AppModal label="View exercise detail">
        <ExerciseDetailContent />
        <AddButton />
      </AppModal>
      {children}
    </Box>
  );
};
