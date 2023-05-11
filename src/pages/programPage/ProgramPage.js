import React from "react";
import ProgramListTable from "../../components/tables/ProgramListTable";
import TableCard from "../../components/cards/TableCard";
import AddButton from "../../components/buttons/AddButton";
import { NavLink } from "react-router-dom";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <h1>PROGRAM LIST</h1>
      <TableCard>
        <ProgramListTable />
      </TableCard>
      <AddButton>
        <NavLink to="/createprogram">New program</NavLink>
      </AddButton>

      {children}
    </div>
  );
}
