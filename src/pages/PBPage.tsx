import { ListTable } from "../components/tables/ListTable";
import { PbData, Columns } from "../assets/dummy/PbExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

//TO DO: Table with date, weight, reps, activity
//TO DO: PB is automatically calculated using history
//TO DO: May want to add aPB manually??
//TO DO: Add goals on to the table
//TO DO: calc sinclair?
//TO DO: Table is for snatch, clean and jerk, deadlift, benchpress, back squat, front squat only

export const PBPage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">1 RM PRs</Typography>
      <ListTable data={PbData} columns={Columns} checkboxSelection={false} />
    </Box>
  );
};
