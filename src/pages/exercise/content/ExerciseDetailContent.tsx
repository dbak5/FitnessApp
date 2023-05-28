import { ListTable } from "../../../components/tables/ListTable";
import {
  ExerciseDetailData,
  ExerciseDetailColumns,
} from "../../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const ExerciseDetailContent: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Typography variant="h1">Exercise: Front Squat</Typography>
      <Typography variant="h2">1RM PB: 70kg</Typography>
      <Typography variant="h2">PB date: 20/05/2020</Typography>
      <Typography variant="body1">Equipment: Barbell</Typography>
      <ListTable
        data={ExerciseDetailData}
        columns={ExerciseDetailColumns}
        checkboxSelection={false}
      />
      {children}
    </Box>
  );
};
