import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RootContextProvider from "ContextApi/RootContext";
import App from "./App";
import "styles/global.css";
import SidebarContextProvider from "ContextApi/SidebarNavContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </RootContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
