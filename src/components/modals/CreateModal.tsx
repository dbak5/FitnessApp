import { FC, PropsWithChildren } from "react";
import { BaseModal } from "./BaseModal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type Props = PropsWithChildren & {};

export const CreateModal: FC<Props> = ({ children }) => {
  return (
    <BaseModal label="Create new" disabled={false}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </BaseModal>
  );
};
