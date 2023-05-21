import * as React from "react";
import ListTable from "../../components/tables/ListTable";
import {
  ProgramExample,
  ColumnsProgramExample,
} from "../../assets/dummy/ProgramExample";
import Button from "@mui/material/Button";

export default function EditProgramPage({ children }) {
  return (
    <div className="editProgramPage">
      <h1>Edit Program</h1>
      <ListTable
        data={ProgramExample}
        columns={ColumnsProgramExample}
        checkboxSelection={false}
      />
      <Button>Save</Button>
      {children}
    </div>
  );
}
