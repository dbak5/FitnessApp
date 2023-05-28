import { ListTable } from "../../components/tables/ListTable";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ProgramList, ProgramColumns } from "../../assets/dummy/ProgramExample";
import { AppModal } from "../../components/modals/AppModal";
import { AddButton } from "../../components/buttons/AddButton";
import { AddProgramOptions } from "./content/AddProgramOptions";
import { CreateProgramForm } from "./content/CreateProgramForm";
import { ProgramDetailContent } from "./content/ProgramDetailContent";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const ProgramPage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Program Library</Typography>
      <ListTable
        data={ProgramList}
        columns={ProgramColumns}
        checkboxSelection={false}
      />
      <Typography variant="body1">
        TO DO: be able to select program from table to add to calendar, select
        days of the week to workout/frequency
      </Typography>
      <Typography variant="body1">
        TO DO: be able to select program from table and edit/add exercises
      </Typography>
      <Typography variant="body1">
        TO DO: be able to click on a program in list to bring up program detail
      </Typography>
      <Typography variant="body1">
        TO DO: how can we calculate or add in deload week
      </Typography>

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
    </Box>
  );
};
