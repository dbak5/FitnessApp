import { ListTable } from "../../../components/tables/ListTable";
import {
  ProgramDetailExample,
  ProgramDetailColumns,
} from "../../../assets/dummy/ProgramExample";

import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const ProgramDetailContent: FC<Props> = ({ children }) => {
  return (
    <Box>
      <h1>Program Name: Weightlifting Block 1</h1>
      <ListTable
        data={ProgramDetailExample}
        columns={ProgramDetailColumns}
        checkboxSelection={false}
      />
      <h2>Dates complete:</h2>
      <h3> 20/05/2020</h3>
      <h3> 28/05/2021</h3>
      <h3> 27/05/2022</h3>
      {children}
    </Box>
  );
};
