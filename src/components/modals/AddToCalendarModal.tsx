import { FC, PropsWithChildren } from "react";
import { AppModal } from "../../components/modals/AppModal";
import { AddButton } from "../../components/buttons/AddButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type Props = PropsWithChildren & {};

export const AddToCalendarModal: FC<Props> = ({ children }) => {
  return (
    <AppModal label="Add to calendar">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <AddButton />
          </Grid>
        </Grid>
      </Box>
    </AppModal>
  );
};
