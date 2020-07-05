import React from "react";
import Menu from "../Menu/Menu";
const Profile = (props) => {
  return (
    <>
      <Menu {...props} leftMenu={false} />
      <br />
      <br />
      <br />
      <div>
        <div className="container">
          <div className="jumbotron text-center">
            <p className="lead">
              <b>Profile</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
