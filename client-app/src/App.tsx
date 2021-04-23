import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import theme from "./Theme";
import Header from "./Header";
import ListTest from "./ListTest";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <ListTest />
    </ThemeProvider>
  );
}

export default App;
