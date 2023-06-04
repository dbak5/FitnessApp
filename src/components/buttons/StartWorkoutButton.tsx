import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import { BaseLinkButton } from "./BaseLinkButton";

type Props = PropsWithChildren & {};

export const StartWorkoutButton: FC<Props> = () => {
  return (
    <BaseLinkButton component={NavLink} link="/workoutsession">
      Start Workout
    </BaseLinkButton>
  );
};
