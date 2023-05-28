import Box from "@mui/material/Box";
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
import Grid from "@mui/material/Grid";
import { AddButton } from "../../../components/buttons/AddButton";

type Props = PropsWithChildren & {};

export const CreateExerciseForm: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextInput label="Exercise" children={undefined} />
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
          <Grid item xs={12}>
            <AddButton activity="exercise" />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
