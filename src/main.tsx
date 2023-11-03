import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routers/Router";
import { MantineProvider } from "@mantine/core";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <MantineProvider>
      <Router />
    </MantineProvider>
  // {/* </React.StrictMode> */}
);
