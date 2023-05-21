import React from "react";
import CreateProgramModal from "../components/program/CreateProgramModal";
import ListTable from "../components/generic/tables/ListTable";
import { ProgramList, Columns } from "../assets/dummy/ProgramExample";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <h1>Program Library</h1>
      <ListTable
        data={ProgramList}
        columns={Columns}
        checkboxSelection={false}
      />
      <p>
        TO DO: be able to select program from table to add to calendar, select
        days of the week to workout/frequency
      </p>
      <p>TO DO: be able to select program from table and edit/add exercises</p>
      <p>
        TO DO: be able to click on a program in list to bring up program detail
      </p>
      <p>TO DO: how can we calculate or add in deload week</p>

      <CreateProgramModal />
      {children}
    </div>
  );
}
