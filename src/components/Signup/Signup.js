import React from "react";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";
const Signup = (props) => {
  return (
    <>
      <Menu {...props} leftMenu={false} />
      <div>
        <div class="container">
          <br />
          <br />
          <br />
          <div class="text-center">
            <h3>Sign Up</h3>
            <p class="lead">Become a part of our community</p>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-sm-6">
              <img
                class="img-fluid"
                src={require("../../assets/signin.svg")}
                alt="signup image"
              />
            </div>
            <div class="col-sm-6">
              <form>
                <div class="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    required
                    name="username"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    required
                    name="email"
                    class="form-control"
                  />
                  <small class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    required
                    name="password2"
                    class="form-control"
                  />
                </div>

                <button type="submit" class="btn btn-primary btn-c signup-btn">
                  Signup
                </button>
                <div class="mt-2 W-100 text-center">
                  <p>
                    Already have an account
                    <Link to="/login" class="ml-2">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
