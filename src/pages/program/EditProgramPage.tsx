import { ListTable } from "../../components/tables/ListTable";
import {
  ProgramExample,
  ColumnsProgramExample,
} from "../../assets/dummy/ProgramExample";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import { SaveButton } from "../../components/buttons/SaveButton";

type Props = PropsWithChildren & {};

export const EditProgramPage: FC<Props> = () => {
  return (
    <>
      <Typography variant="h1">Edit Program</Typography>
      <ListTable
        data={ProgramExample}
        columns={ColumnsProgramExample}
        checkboxSelection={false}
      />
      <SaveButton />
    </>
  );
};
