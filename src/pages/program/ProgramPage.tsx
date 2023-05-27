import { ListTable } from "../../components/tables/ListTable";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ProgramList, ProgramColumns } from "../../assets/dummy/ProgramExample";
import { AppModal } from "../../components/modals/AppModal";
import { AddButton } from "../../components/buttons/AddButton";
import { AddProgramOptions } from "./content/AddProgramOptions";
import { CreateProgramForm } from "./content/CreateProgramForm";
import { ProgramDetailContent } from "./content/ProgramDetailContent";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const ProgramPage: FC<Props> = ({ children }) => {
  return (
    <Box>
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

      <AppModal label="Create new">
        <CreateProgramForm />
      </AppModal>
      <AppModal label="Add to calendar">
        <AddProgramOptions />
        <AddButton />
      </AppModal>
      <AppModal label="Show program detail">
        <ProgramDetailContent />
        <Button>
          <NavLink to="/editprogram">Make changes</NavLink>
        </Button>
      </AppModal>
      {children}
    </Box>
  );
};
