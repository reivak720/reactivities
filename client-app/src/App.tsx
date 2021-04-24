import React from "react";
import { ThemeProvider } from "@material-ui/styles";
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
