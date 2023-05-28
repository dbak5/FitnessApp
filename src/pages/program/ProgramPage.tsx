import { ListTable } from "../../components/tables/ListTable";
import { ProgramList, ProgramColumns } from "../../assets/dummy/ProgramExample";
import { AddProgramOptions } from "./content/AddProgramOptions";
import { CreateProgramForm } from "./content/CreateProgramForm";
import { ProgramDetailContent } from "./content/ProgramDetailContent";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CreateModal } from "../../components/modals/CreateModal";
import { AddToCalendarModal } from "../../components/modals/AddToCalendarModal";
import { EditButton } from "../../components/buttons/EditButton";
import { ViewDetailModal } from "../../components/modals/ViewDetailModal";

type Props = PropsWithChildren & {};

//TO DO: be able to select program from table to add to calendar, select days of the week to workout/frequency
//TO DO: be able to select program from table and edit/add exercises
//TO DO: be able to click on a program in list to bring up program detail
//TO DO: how can we calculate or add in deload week

export const ProgramPage: FC<Props> = () => {
  const activity = "program";
  return (
    <Box>
      <Typography variant="h1">Program Library</Typography>
      <ListTable
        data={ProgramList}
        columns={ProgramColumns}
        checkboxSelection={false}
      />
      <CreateModal>
        <CreateProgramForm place={"library"} />
      </CreateModal>
      <AddToCalendarModal>
        <AddProgramOptions />
      </AddToCalendarModal>
      <EditButton link="/editprogram" activity={activity} />
      <ViewDetailModal link="/editprogram" activity={activity}>
        <ProgramDetailContent />
      </ViewDetailModal>
    </Box>
  );
};
