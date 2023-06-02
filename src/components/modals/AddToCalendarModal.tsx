import { FC, PropsWithChildren } from "react";
import { AppModal } from "./AppModal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AddButton } from "../buttons/AddButton";

type Props = PropsWithChildren & {
  disabled: boolean;
};

export const AddToCalendarModal: FC<Props> = ({ children, disabled }) => {
  return (
    <AppModal label="Add to calendar" disabled={disabled}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <AddButton place="calendar" />
          </Grid>
        </Grid>
      </Box>
    </AppModal>
  );
};
