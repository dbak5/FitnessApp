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

type Props = PropsWithChildren & {};

export const CreateExerciseForm: FC<Props> = ({ children }) => {
  return (
    <Box>
      <FormControl>
        <TextInput label="Exercise" children={undefined} />
        <SearchInputControlledSelect label="Category" options={CategoryList} />
        <SearchInputControlledSelect
          label="Equipment"
          options={EquipmentList}
        />
        <SearchInputMultiSelect label="Body Part" options={BodyPartList} />
      </FormControl>
    </Box>
  );
};
