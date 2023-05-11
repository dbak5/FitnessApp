import React from "react";
import AddButton from "../../components/buttons/AddButton";
import ProgramDatePicker from "../../components/inputs/ProgramDatePicker";
import DatePicker from "../../components/inputs/DatePicker";
import ProgramTable from "../../components/tables/ProgramTable";
import TableCard from "../../components/cards/TableCard";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <h1>PROGRAM</h1>
      <TableCard>
        <ProgramTable />
      </TableCard>
      <p>Select start date</p>
      <ProgramDatePicker />
      <p>Select days of week to workout</p>
      <DatePicker />
      <AddButton>Add to Activity</AddButton>
      <p>Table with a program name input.</p>
      <p>Attributes for a program: length of time, days a week, start date</p>
      <p>
        Select start date and program automatically sets out program in calendar
      </p>
      {children}
    </div>
  );
}
