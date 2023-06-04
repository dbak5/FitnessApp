import FormControl from "@mui/material/FormControl";
import { SearchInputControlledSelect } from "../../../components/inputs/SearchInputControlledSelect";
import { CategoryList } from "../../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  CreateProgramColumns,
  CreateProgramExample,
} from "../../../assets/dummy/ProgramExample";
import { DataGrid } from "@mui/x-data-grid";
import { AddButton } from "../../../components/buttons/AddButton";

type Props = PropsWithChildren & {
  place: string;
};

//TODO need to be able to add calculations to weight - i.e. from 1RM or "+2.5 to week 1 day 2" or progressive overload
//TODO add row button
//TODO dropdown menus for exercise and equipment

export const CreateProgramForm: FC<Props> = ({ place }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="Program Name" />
          </Grid>
          <Grid item xs={12}>
            <SearchInputControlledSelect
              label="Category"
              options={CategoryList}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <SearchInputControlledSelect
              label="Equipment"
              options={EquipmentList}
            />
          </Grid> */}
          {/* <Grid item xs={12}>
            <SearchInputMultiSelect label="Body Part" options={BodyPartList} />
          </Grid>
         */}
          <Grid item xs={12}>
            <DataGrid
              rows={CreateProgramExample}
              columns={CreateProgramColumns}
            ></DataGrid>
          </Grid>
          <Grid item xs={12}>
            <AddButton place={place} />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
