import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Menu = (props) => {
  const [hide, setHide] = useState(true);
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
            <a className="navbar-brand" href="#">
              <img
                src={require("../../assets/fekupirates.png")}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
                loading="lazy"
              />
              &nbsp;Feku Pirates
            </a>
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="fas fa-chevron-circle-down"
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
                className="nav-item"
                // data-toggle="collapse"
                // data-target="#navbarSupportedContent"
              >
                <NavLink to="/" className="nav-link">
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

                {/* <li
                  className="nav-item "
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <a className="nav-link">Signout </a>
                </li> */}
                {/* <li className="nav-item ">
                  <a className="nav-link"   data-toggle="collapse"
                     data-target=".navbar-collapse.show">
                    <i className="fas fa-user"></i>{" "}
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
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
