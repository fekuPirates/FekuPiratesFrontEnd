import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
const Menu = (props) => {
  const [hide, setHide] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playLists, setPlayLists] = useState([]);
  useEffect(() => {
    if (props.playLists) {
      setPlayLists([...props.playLists]);
    }
  }, [props.playLists]);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
          <div>
            {props.leftMenu ? (
              <span
                className="navbar-left-icon-c"
                onClick={() => {
                  setHide(!hide);
                }}
              >
                <i
                  className="fas fa-bars mx-2 left-menu-icon"
                  style={{
                    color: "white",
                    fontSize: "28px",
                    verticalAlign: "middle",
                  }}
                ></i>
              </span>
            ) : null}
            <Link to="/" className="navbar-brand" href="#">
              <img
                src={require("../../assets/fekupirates.png")}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
                loading="lazy"
              />
              &nbsp;Feku Pirates
            </Link>
          </div>
          <button
            className="navbar-toggler "
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className={
                !mobileMenuOpen
                  ? "fas fa-chevron-circle-down rotate-clock-icon"
                  : "fas fa-chevron-circle-down rotate-anticlock-icon"
              }
              style={{
                color: "white",
                fontSize: "28px",
                verticalAlign: "middle",
              }}
            ></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-center">
              <li
                className="nav-item first-link"
                // data-toggle="collapse"
                // data-target="#navbarSupportedContent"
              >
                <NavLink to="/" exact={true} className="nav-link">
                  Blogs
                </NavLink>
              </li>

              <li
                className="nav-item "
                // data-toggle="collapse"
                // data-target="#navbarSupportedContent"
              >
                <NavLink to="/channel" className="nav-link">
                  Channel
                </NavLink>
              </li>
            </ul>
            <div className="ml-auto">
              <ul className="navbar-nav mr-auto text-center">
                <li
                  className="nav-item "
                  // data-toggle="collapse"
                  // data-target="#navbarSupportedContent"
                >
                  <NavLink to="/notifications" className="nav-link">
                    Notifications <span className="badge badge-primary">4</span>
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/profile" className="nav-link">
                    <i className="fas fa-user"></i>
                  </NavLink>
                </li>
                <li
                  class="nav-item "
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <a class="nav-link">Signout </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* //signout modal */}

      <div
        className="modal fade signout-modal-overlay"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content signout-modal-content">
            <div>
              <div className="container text-center">
                <p className="lead mt-3">
                  <b>Are you sure?</b>
                </p>
              </div>
            </div>
            <div className="modal-footer signout-modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-c"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-dismiss="modal"
                onClick={() => {
                  props.history.replace("/");
                }}
                className="btn btn-primary btn-c modal-signout-btn"
              >
                Signout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* left menu */}

      <div
        className={
          hide ? "left-menu bg-white" : "left-menu sidebar-active bg-white"
        }
      >
        <div id="sidebar text-center">
          <br />
          <br />
          <br />
          <div className="side-links ">
            <span>
              <b>PlayLists</b>
            </span>
          </div>
          <hr />
          {playLists.map((playList, index) => {
            return (
              <div
                onClick={() => {
                  props.onSetPlayListId(playList.playListitemId);
                  // console.log(playList);
                }}
                key={index}
                className="side-links my-1"
              >
                <span>{playList.title}</span>
                <span className=" ml-1 badge badge-primary">
                  {playList.playListItemNo}
                </span>
              </div>
            );
          })}

          <br />
          <br />
          <br />
        </div>
      </div>

      {/* overlay */}

      <div
        onClick={() => {
          setHide(true);
        }}
        className={hide ? "overlay" : "overlay sidebar-active-overlay"}
      ></div>
    </>
  );
};

export default Menu;
