import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogSuspense from "./components/Suspense/BlogSuspense";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Notifications from "./components/Notifications/Notifications";
import Blogs from "./components/Blogs/Blogs";
import Channel from "./components/Channel/Channel";
import Player from "./components/Player/Player";
const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/channel/video/:playListId/:videoId"
            exact
            component={Player}
          />
          <Route path="/channel" exact component={Channel} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/" exact component={Blogs} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Routes;
