import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small  text-light pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center">
            <div className="col-md-6 mt-md-0 mt-3">
              <img
                className="img-fluid"
                style={{ backgroundColor: "white", borderRadius: "50px" }}
                height="100"
                width="100"
                src={require("../../assets/fekupirates.png")}
                alt=""
              />
              <p className="mt-1">keep update yourself</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-6 mb-md-0 mb-3 ">
              <h5 className="text-uppercase">SOCIAL LINKS</h5>

              <ul className="list-unstyled">
                <li>
                  <i className="fab fa-youtube mx-2"></i>
                  <a
                    className="text-white"
                    href="https://www.youtube.com/channel/UCZnV0DQKd5aFIwH-TQifxXg"
                    target="_blank"
                  >
                    youtube
                  </a>
                </li>
                <li>
                  <i className="fab fa-pinterest mx-2"></i>
                  <a
                    className="text-white"
                    href="https://www.pinterest.de/fekupirates/"
                    target="_blank"
                  >
                    pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: Feku Pirates
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fekupirates@gmail.com"
            target="_blank"
          >
            fekupirates@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
