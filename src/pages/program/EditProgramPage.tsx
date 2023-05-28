import { ListTable } from "../../components/tables/ListTable";
import {
  ProgramExample,
  ColumnsProgramExample,
} from "../../assets/dummy/ProgramExample";
import Button from "@mui/material/Button";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const EditProgramPage: FC<Props> = ({}) => {
  return (
    <Box>
      <Typography variant="h1">Edit Program</Typography>
      <ListTable
        data={ProgramExample}
        columns={ColumnsProgramExample}
        checkboxSelection={false}
      />
      <Button>Save</Button>
    </Box>
  );
};
