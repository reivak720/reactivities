import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import ActivityPage from "./ActivityPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ActivityPage />
    </ThemeProvider>
  );
}

export default App;
