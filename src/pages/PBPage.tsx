import { ListTable } from "../components/tables/ListTable";
import { PbData, Columns } from "../assets/dummy/PbExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const PBPage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">1 RM PRs</Typography>
      <ListTable data={PbData} columns={Columns} checkboxSelection={false} />
      <Typography variant="body1">
        TO DO: Table with date, weight, reps, activity
      </Typography>
      <Typography variant="body1">
        TO DO: PB is automatically calculated using history
      </Typography>
      <Typography variant="body1">
        TO DO: May want to add aPB manually??
      </Typography>
      <Typography variant="body1">TO DO: Add goals on to the table</Typography>
      <Typography variant="body1">TO DO: calc sinclair?</Typography>
      <Typography variant="body1">
        TO DO: Table is for snatch, clean and jerk, deadlift, benchpress, back
        squat, front squat only
      </Typography>
    </Box>
  );
};
