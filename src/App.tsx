import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CyclesProvider } from "context/CycleContext";

import { Router } from "routes";

import { defaultTheme } from "styles/theme/default";
import GlobalStyles from "styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyles />
        </BrowserRouter>
      </CyclesProvider>
    </ThemeProvider>
  );
}

export default App;
