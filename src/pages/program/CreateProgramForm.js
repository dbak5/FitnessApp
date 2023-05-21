import React from "react";
import FormControl from "@mui/material/FormControl";
import TextInput from "../../components/inputs/TextInput";
import SearchInputControlledSelect from "../../components/inputs/SearchInputControlledSelect";
import SearchInputMultiSelect from "../../components/inputs/SearchInputMultiSelect";
import {
  BodyPartList,
  CategoryList,
  EquipmentList,
} from "../../assets/dummy/ExerciseExample";

export default function CreateProgramForm({ children }) {
  return (
    <div className="createProgramForm">
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
    </div>
  );
}
