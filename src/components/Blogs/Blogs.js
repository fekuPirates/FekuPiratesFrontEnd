import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

const Blogs = (props) => {
  const [topBlogs, setTopBlogs] = useState([]);
  const [sideBlogs, setSideBlogs] = useState([]);
  const [middleBlogs, setMiddleBlogs] = useState([]);
  return (
    <>
      <Menu {...props} leftMenu={false} />
      <br />
      <br />
      <br />

      <div>
        <div className="container mt-4 text-center">
          <div className="search-c">
            <input type="text" placeholder="Search keywords" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="border rounded">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  className="img-fluid "
                  alt=""
                />
                <div className="p-2 top-part-content rounded">
                  <span>heading</span>
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, atque!
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border rounded">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  className="img-fluid "
                  alt=""
                />
                <div className="p-2 top-part-content rounded">
                  <span>heading</span>
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, atque!
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border rounded">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  className="img-fluid "
                  alt=""
                />
                <div className="p-2 top-part-content rounded">
                  <span>heading</span>
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, atque!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="row border rounded  mb-2 bg-white">
                <div className="col-sm-4">
                  <img
                    src={require("../../assets/blog-img.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-sm-8">
                  <span className="lead">Technology</span>
                  <br />
                  <span>This is heading number one</span>
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <br />
                  <span className="text-muted">Writter :sunny</span>
                  <br />
                  <span>28/12/1998</span>
                </div>
              </div>
              <div className="row border rounded  mb-2 bg-white">
                <div className="col-sm-4">
                  <img
                    src={require("../../assets/blog-img.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-sm-8">
                  <span className="lead">Technology</span>
                  <br />
                  <span>This is heading number one</span>
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <br />
                  <span className="text-muted">Writter :sunny</span>
                  <br />
                  <span>28/12/1998</span>
                </div>
              </div>
              <div className="row border rounded bg-white mb-2">
                <div className="col-sm-4">
                  <img
                    src={require("../../assets/blog-img.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-sm-8">
                  <span className="lead">Technology</span>
                  <br />
                  <span>This is heading number one</span>
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <br />
                  <span className="text-muted">Writter :sunny</span>
                  <br />
                  <span>28/12/1998</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="right-blog">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mt-3 bg-dark text-white">
                <div className="card-body">
                  <p className="card-text">Add Box</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
