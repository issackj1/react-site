import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";
import App from "./App";
import theme from "./theme";

const container = document.getElementById("root");
// @ts-ignore
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
