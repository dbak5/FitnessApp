import React from "react";
import AddButton from "../../components/buttons/AddButton";
import MonthDatePicker from "../../components/inputs/MonthDatePicker";
import DatePicker from "../../components/inputs/DatePicker";
import ProgramTable from "../../components/tables/ProgramTable";
import TableCard from "../../components/cards/TableCard";

export default function CreateProgramPage({ children }) {
  return (
    <div className="createProgramPage">
      <h1>CREATE PROGRAM</h1>

      <TableCard>
        <ProgramTable />
      </TableCard>
      <p>Select start date</p>
      <MonthDatePicker label="Start date" />
      <p>Select days of week to workout</p>
      <DatePicker />
      <AddButton>to Activity</AddButton>
      <p>Table with a program name input.</p>
      <p>
        Select start date and program automatically sets out program in calendar
      </p>
      {children}
    </div>
  );
}
