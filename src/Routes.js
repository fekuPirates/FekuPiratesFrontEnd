import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Notifications from "./components/Notifications/Notifications";
import Blogs from "./components/Blogs/Blogs";
import Channel from "./components/Channel/Channel";
import Player from "./components/Player/Player";
import Profile from "./components/Profile/Profile";
const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/channel/videos/:playListId" exact component={Player} />
          <Route path="/channel" exact component={Channel} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/" exact component={Blogs} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Routes;
