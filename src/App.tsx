import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>teste</h1>
    </ThemeProvider>
  );
}

export default App;
