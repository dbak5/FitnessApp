import { EditableTable } from "../../components/tables/EditableTable";
import { ProgramList, ProgramColumns } from "../../assets/dummy/ProgramExample";
import { AddProgramOptions } from "./content/AddProgramOptions";
import { CreateProgramForm } from "./content/CreateProgramForm";
import { ProgramDetailContent } from "./content/ProgramDetailContent";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

//TO DO: be able to select program from table to add to calendar, select days of the week to workout/frequency
//TO DO: be able to select program from table and edit/add exercises
//TO DO: be able to click on a program in list to bring up program detail
//TO DO: how can we calculate or add in deload week

export const ProgramPage: FC<Props> = () => {
  return (
    <>
      <Typography variant="h1">Program Library</Typography>
      <EditableTable
        data={ProgramList}
        columns={ProgramColumns}
        checkboxSelection={false}
        addOptions={<AddProgramOptions />}
        detailContent={<ProgramDetailContent />}
        createForm={<CreateProgramForm place={"library"} />}
        saveButton
        addToCalendarModal
        viewDetailModal
        createModal
      />
    </>
  );
};
