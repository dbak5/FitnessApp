import React from "react";
import AddButton from "../generic/buttons/AddButton";
import FormControl from "@mui/material/FormControl";
import TextInput from "../generic/inputs/TextInput";
import SearchInputControlledSelect from "../generic/inputs/SearchInputControlledSelect";
import SearchInputMultiSelect from "../generic/inputs/SearchInputMultiSelect";
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
        <AddButton />
      </FormControl>

      {children}
    </div>
  );
}
