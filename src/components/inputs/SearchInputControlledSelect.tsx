import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label: string;
  options: any[];
};

export const SearchInputControlledSelect: FC<Props> = ({ label, options }) => {
  const [setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Autocomplete
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </>
  );
};
