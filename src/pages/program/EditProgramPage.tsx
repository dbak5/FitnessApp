import { ListTable } from "../../components/tables/ListTable";
import {
  ProgramExample,
  ColumnsProgramExample,
} from "../../assets/dummy/ProgramExample";
import Button from "@mui/material/Button";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const EditProgramPage: FC<Props> = ({}) => {
  return (
    <Box>
      <h1>Edit Program</h1>
      <ListTable
        data={ProgramExample}
        columns={ColumnsProgramExample}
        checkboxSelection={false}
      />
      <Button>Save</Button>
    </Box>
  );
};
