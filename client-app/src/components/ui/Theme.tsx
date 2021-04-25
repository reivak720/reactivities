import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const blue = "#0B72B9";
const orange = "#FFBA60";
const grey = "#868686";
const black = "#212121";
const red = "#c62828";

const theme = createMuiTheme({
  palette: {
    common: {
      black: black,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: red,
    },
  },

  typography: {
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: black,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: blue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: blue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: "#fff",
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.12rem",
      fontWeight: 300,
      color: grey,
    },
    button:{
      textTransform: "none",
    },
    subtitle2: {
      color: black,
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: blue,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: black,
    },

  },
});

export default theme;
