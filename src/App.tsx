import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}
