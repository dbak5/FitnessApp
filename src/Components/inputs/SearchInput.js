import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchInput() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={exercises}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Search..." placeholder="Favorites" />
      )}
    />
  );
}

const exercises = [
  { title: "Front squat" },
  { title: "Back squat" },
  { title: "Deadlift" },
  { title: "Bench press" },
  { title: "Clean and jerk" },
  { title: "Snatch balance" },
  { title: "Snatch pull" },
];
