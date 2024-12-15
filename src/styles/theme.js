import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2c3e50",
    },
    secondary: {
      main: "#1abc9c",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1abc9c",
    },
    secondary: {
      main: "#2c3e50",
    },
  },
});
