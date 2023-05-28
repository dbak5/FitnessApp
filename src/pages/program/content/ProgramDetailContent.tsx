import { ListTable } from "../../../components/tables/ListTable";
import {
  ProgramDetailExample,
  ProgramDetailColumns,
} from "../../../assets/dummy/ProgramExample";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

type Props = PropsWithChildren & {};

export const ProgramDetailContent: FC<Props> = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4">Program Name:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Weightlifting Block 1</Typography>
        </Grid>
        <Grid item xs={12}>
          <ListTable
            data={ProgramDetailExample}
            columns={ProgramDetailColumns}
            checkboxSelection={false}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Dates complete:</Typography>
          <Typography variant="body1"> 20/05/2020</Typography>
          <Typography variant="body1"> 28/05/2021</Typography>
          <Typography variant="body1"> 27/05/2022</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button>
            <NavLink to="/editprogram">Make changes</NavLink>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
