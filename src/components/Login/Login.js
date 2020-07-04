import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container">
        <br />
        <br />
        <br />
        <div className="text-center">
          <h3>Sign In</h3>
          <p className="lead">Welcome back</p>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src={require("../../assets/blogging.svg")}
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <div className="container w-75">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control input-success"
                    placeholder="Ex. abc@gmail.com"
                    name="email"
                    required
                  />

                  <small className="form-text error-text">
                    Not valid email
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control input-false"
                    name="password"
                    placeholder="Ex. zyx1@3es"
                    required
                  />
                  <small className="form-text error-text">
                    Must be of length 5
                  </small>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-c login-btn"
                >
                  Sign In
                </button>
                <div className="mt-2 W-100 text-center">
                  <p>
                    Don't have an account
                    <a href="./signup.html" type="submit" className="ml-2">
                      Signup
                    </a>
                  </p>
                </div>
                <div className="or-c">
                  <p>Or log in with</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
