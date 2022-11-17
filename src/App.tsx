import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";
import { CoffesContextProvider } from "./contexts/CoffesContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CoffesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
