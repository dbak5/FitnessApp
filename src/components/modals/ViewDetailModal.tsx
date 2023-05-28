import { FC, PropsWithChildren } from "react";
import { AppModal } from "../../components/modals/AppModal";
import { EditButton } from "../../components/buttons/EditButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type Props = PropsWithChildren & {
  activity: string;
  link: string;
};

//TODO need to work out how to make this generic for program and exercise

export const ViewDetailModal: FC<Props> = ({ children, activity, link }) => {
  return (
    <AppModal label="View detail">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <EditButton link={link} activity={activity} />
          </Grid>
        </Grid>
      </Box>
    </AppModal>
  );
};
