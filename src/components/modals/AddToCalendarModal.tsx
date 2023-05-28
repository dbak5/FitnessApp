import { FC, PropsWithChildren } from "react";
import { AppModal } from "../../components/modals/AppModal";
import { AddButton } from "../../components/buttons/AddButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AddToCalendarButton } from "../buttons/AddToCalendarButton";

type Props = PropsWithChildren & {
  activity: string;
};

export const AddToCalendarModal: FC<Props> = ({ children, activity }) => {
  return (
    <AppModal label="Add to calendar">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <AddToCalendarButton />
          </Grid>
        </Grid>
      </Box>
    </AppModal>
  );
};
