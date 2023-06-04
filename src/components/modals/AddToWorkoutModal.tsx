import { FC, PropsWithChildren } from "react";
import { BaseModal } from "./BaseModal";
import Grid from "@mui/material/Grid";
import { AddButton } from "../buttons/AddButton";

type Props = PropsWithChildren & {};

export const AddToWorkoutModal: FC<Props> = ({ children }) => {
  return (
    <BaseModal>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <AddButton place="workout" />
        </Grid>
      </Grid>
    </BaseModal>
  );
};
