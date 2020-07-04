import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
const Notifications = () => {
  return (
    <>
      <Menu />
      <div>
        <div className="container">
          <div className="text-center">
            <p className="lead">
              <b>Notifications</b>
            </p>
          </div>
          <br />
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2 rounded "
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2 rounded"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2 rounded"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Notifications;
