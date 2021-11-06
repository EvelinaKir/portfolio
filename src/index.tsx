import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App/App";
import {
  BrowserRouter, 
  Route, Routes
} from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Contacts } from "./components/Contacts/Contacts";
import { Projects } from "./components/Projects/Projects";

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById("root")
);
