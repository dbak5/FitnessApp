import { FC, PropsWithChildren } from "react";
import { BaseModal } from "./BaseModal";
import Grid from "@mui/material/Grid";

type Props = PropsWithChildren & {
  label: string;
};

export const CreateModal: FC<Props> = ({ children, label }) => {
  return (
    <BaseModal label={label}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </BaseModal>
  );
};
