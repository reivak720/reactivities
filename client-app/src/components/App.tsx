import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import CardTest from "./CardTest";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CardTest />
    </ThemeProvider>
  );
}

export default App;
