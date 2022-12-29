import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "styles/theme/default";
import GlobalStyles from "styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
