import React from "react";
import ListTable from "../components/generic/tables/ListTable";
import {
  ProgramList,
  ProgramColumns,
  ProgramListSimple,
} from "../assets/dummy/ProgramExample";
import ProgramDetailModal from "../components/program/ProgramDetailModal";
import AddModal from "../components/generic/modals/AddModal";
import AddProgramOptions from "../components/program/AddProgramOptions";
import CreateProgramForm from "../components/program/CreateProgramForm";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <h1>Program Library</h1>
      <ListTable
        data={ProgramList}
        columns={ProgramColumns}
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

      <AddModal label="Create new">
        <CreateProgramForm />
      </AddModal>
      <AddModal label="Add to calendar" options={ProgramListSimple}>
        <AddProgramOptions />
      </AddModal>
      <ProgramDetailModal />
      {children}
    </div>
  );
}
