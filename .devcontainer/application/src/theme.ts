import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c2032",
      light: "#617487",
    },
    background: {
      default: "#2C3E50",
      paper: "#617487",
    },
    text: {
      primary: "#e7e7e7",
    },
  },
});

export default theme;
