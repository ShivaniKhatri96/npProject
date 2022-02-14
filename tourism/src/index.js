import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { AuthKeyProvider } from "./Components/store/authKey";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthKeyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthKeyProvider>
  </ThemeProvider>,
  document.getElementById("root")
);


