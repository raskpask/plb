import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Cookies from "universal-cookie";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App cookie={new Cookies()} />
  </BrowserRouter>,
  document.getElementById("root")
);
