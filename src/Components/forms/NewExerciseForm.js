import React from "react";
import AddButton from "../../components/buttons/AddButton";
import FormControl from "@mui/material/FormControl";
import TextInput from "../inputs/TextInput";
import SearchInputControlledSelect from "../inputs/SearchInputControlledSelect";
import SearchInputMultiSelect from "../inputs/SearchInputMultiSelect";
import {
  BodyPartList,
  CategoryList,
  EquipmentList,
} from "../../assets/dummy/ExerciseList";

export default function NewExerciseForm({ children }) {
  return (
    <div className="newExerciseForm">
      <FormControl>
        <TextInput label="Exercise" />
        <SearchInputControlledSelect label="Category" options={CategoryList} />
        <SearchInputControlledSelect
          label="Equipment"
          options={EquipmentList}
        />
        <SearchInputMultiSelect
          label="Body Part"
          options={BodyPartList}
        ></SearchInputMultiSelect>
        <AddButton>to library</AddButton>
      </FormControl>
      {children}
    </div>
  );
}