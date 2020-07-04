import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import BlogSuspense from "./components/Suspense/BlogSuspense";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Notifications from "./components/Notifications/Notifications";
import Blogs from "./components/Blogs/Blogs";
import Channel from "./components/Channel/Channel";

ReactDOM.render(
  <React.StrictMode>
    <Channel />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
