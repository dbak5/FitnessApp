import { ListTable } from "../../../components/tables/ListTable";
import {
  ExerciseDetailData,
  ExerciseDetailColumns,
} from "../../../assets/dummy/ExerciseExample";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const ExerciseDetailContent: FC<Props> = ({ children }) => {
  return (
    <Box>
      <h1>Exercise: Front Squat</h1>
      <h2>1RM PB: 70kg</h2>
      <h2>PB date: 20/05/2020</h2>

      <p>Equipment: Barbell</p>

      <ListTable
        data={ExerciseDetailData}
        columns={ExerciseDetailColumns}
        checkboxSelection={false}
      />
      {children}
    </Box>
  );
};
