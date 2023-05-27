import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#743ada",
    },
    secondary: {
      main: "#d81964",
    },
  },
};

export const theme = createTheme(themeOptions);
