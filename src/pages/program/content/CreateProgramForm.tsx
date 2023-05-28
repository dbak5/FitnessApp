import FormControl from "@mui/material/FormControl";
import { TextInput } from "../../../components/inputs/TextInput";
import { SearchInputControlledSelect } from "../../../components/inputs/SearchInputControlledSelect";
import { SearchInputMultiSelect } from "../../../components/inputs/SearchInputMultiSelect";
import {
  BodyPartList,
  CategoryList,
  EquipmentList,
} from "../../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

type Props = PropsWithChildren & {};

export const CreateProgramForm: FC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextInput label="Program" />
          </Grid>
          <Grid item xs={12}>
            <SearchInputControlledSelect
              label="Category"
              options={CategoryList}
            />
          </Grid>
          <Grid item xs={12}>
            <SearchInputControlledSelect
              label="Equipment"
              options={EquipmentList}
            />
          </Grid>
          <Grid item xs={12}>
            <SearchInputMultiSelect label="Body Part" options={BodyPartList} />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
