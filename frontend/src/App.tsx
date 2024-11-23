import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { LoginProvider } from "./Context/LoginContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <LoginProvider>
          <Router />
        </LoginProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
