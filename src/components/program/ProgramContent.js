import React from "react";
import ProgramListTable from "./ProgramListTable";
import TableCard from "../generic/cards/TableCard";

export default function ProgramContent({ children }) {
  return (
    <div className="programContent">
      <TableCard>
        <ProgramListTable />
      </TableCard>

      {children}
    </div>
  );
}
