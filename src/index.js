import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
// import App from "./App.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./Routes";
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
