import FormControl from "@mui/material/FormControl";
import { TextInput } from "../../../components/inputs/TextInput";
import { SearchInputControlledSelect } from "../../../components/inputs/SearchInputControlledSelect";
import { SearchInputMultiSelect } from "../../../components/inputs/SearchInputMultiSelect";
import {
  BodyPartList,
  CategoryList,
  EquipmentList,
} from "../../../assets/dummy/ExerciseExample";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const CreateProgramForm: FC<Props> = ({ children }) => {
  return (
    <Box>
      <FormControl>
        <TextInput label="Program" />
        <SearchInputControlledSelect label="Category" options={CategoryList} />
        <SearchInputControlledSelect
          label="Equipment"
          options={EquipmentList}
        />
        <SearchInputMultiSelect
          label="Body Part"
          options={BodyPartList}
        ></SearchInputMultiSelect>
      </FormControl>

      {children}
    </Box>
  );
};
