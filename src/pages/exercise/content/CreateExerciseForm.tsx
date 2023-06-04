import FormControl from "@mui/material/FormControl";
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
import { TextField } from "@mui/material";

type Props = PropsWithChildren & {};

export const CreateExerciseForm: FC<Props> = () => {
  return (
    <FormControl>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="Exercise" />
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
          <AddButton place="library" />
        </Grid>
      </Grid>
    </FormControl>
  );
};
