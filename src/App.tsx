import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffesContextProvider } from "./contexts/CoffesContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesContextProvider>
          <Router />
        </CoffesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
