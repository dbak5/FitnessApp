import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const StartWorkoutButton: FC<Props> = () => {
  return (
    <Button component={NavLink} to="/workoutsession">
      Start Workout
    </Button>
  );
};
