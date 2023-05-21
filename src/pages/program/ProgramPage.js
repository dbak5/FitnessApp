import React from "react";
import ListTable from "../../components/tables/ListTable";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  ProgramList,
  ProgramColumns,
  ProgramListSimple,
} from "../../assets/dummy/ProgramExample";
import AddModal from "../../components/modals/AddModal";
import AddProgramOptions from "./AddProgramOptions";
import CreateProgramForm from "./CreateProgramForm";
import {
  ProgramExample,
  ColumnsProgramExample,
} from "../../assets/dummy/ProgramExample";

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
      <AddModal label="Show program detail">
        <ListTable
          data={ProgramExample}
          columns={ColumnsProgramExample}
          checkboxSelection={false}
        />
        <Button>
          <NavLink to="/editprogram">Make changes</NavLink>
        </Button>
      </AddModal>
      {children}
    </div>
  );
}
