import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { JournalApp } from "./JournalApp";
import "./style.css";

ReactDOM.createRoot( document.querySelector('#root') ).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter>
  </React.StrictMode>
);