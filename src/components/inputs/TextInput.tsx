import { TextField } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label: string;
};

export const TextInput: FC<Props> = ({ label, children }) => {
  return (
    <TextField id="outlined-basic" label={label} variant="outlined">
      {children}
    </TextField>
  );
};
