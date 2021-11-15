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
import { setupStore } from "./services/store";
import { Provider } from "react-redux";

const store = setupStore()

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
