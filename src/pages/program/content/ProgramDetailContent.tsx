import { ListTable } from "../../../components/tables/ListTable";
import {
  ProgramDetailExample,
  ProgramDetailColumns,
} from "../../../assets/dummy/ProgramExample";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const ProgramDetailContent: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Program Name: Weightlifting Block 1</Typography>
      <ListTable
        data={ProgramDetailExample}
        columns={ProgramDetailColumns}
        checkboxSelection={false}
      />
      <Typography variant="h2">Dates complete:</Typography>
      <Typography variant="h3"> 20/05/2020</Typography>
      <Typography variant="h3"> 28/05/2021</Typography>
      <Typography variant="h3"> 27/05/2022</Typography>
    </Box>
  );
};
