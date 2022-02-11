import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./src/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
