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

              <p>Get updated around yourself</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-6 mb-md-0 mb-3 ">
              <h5 className="text-uppercase">SOCIAL LINKS</h5>

              <ul className="list-unstyled">
                <li>
                  <i className="fab fa-facebook-f"></i>
                  <a href="#!">Facebook</a>
                </li>

                <li>
                  <i className="fab fa-youtube"></i> <a href="#!">youtube</a>
                </li>
                <li>
                  <i className="fab fa-pinterest"></i>{" "}
                  <a href="#!">pinterest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: Feku Pirates
          <a href="#"> fekupirates@gmail.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
