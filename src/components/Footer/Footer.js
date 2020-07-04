import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="page-footer font-small  text-light pt-4">
        <div class="container text-center text-md-left">
          <div class="row text-center">
            <div class="col-md-6 mt-md-0 mt-3">
              <img
                class="img-fluid"
                style="background-color: white;border-radius: 50px;"
                height="100"
                width="100"
                src="./assets/fekupirates.png"
                alt=""
              />

              <p>Get updated around yourself</p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />
            <div class="col-md-6 mb-md-0 mb-3 ">
              <h5 class="text-uppercase">SOCIAL LINKS</h5>

              <ul class="list-unstyled">
                <li>
                  <i class="fab fa-facebook-f"></i>
                  <a href="#!">Facebook</a>
                </li>

                <li>
                  <i class="fab fa-youtube"></i> <a href="#!">youtube</a>
                </li>
                <li>
                  <i class="fab fa-pinterest"></i> <a href="#!">pinterest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 Copyright: Feku Pirates
          <a href="#"> fekupirates@gmail.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
