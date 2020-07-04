import React from "react";

const Blogs = () => {
  return (
    <div>
      <div class="container mt-4 text-center">
        <div class="search-c">
          <input type="text" placeholder="Search keywords" />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="border rounded">
              <img
                src={require("../../assets/blog-img.jpeg")}
                class="img-fluid "
                alt=""
              />
              <div class="p-2 top-part-content rounded">
                <span>heading</span>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  atque!
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border rounded">
              <img
                src={require("../../assets/blog-img.jpeg")}
                class="img-fluid "
                alt=""
              />
              <div class="p-2 top-part-content rounded">
                <span>heading</span>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  atque!
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border rounded">
              <img
                src={require("../../assets/blog-img.jpeg")}
                class="img-fluid "
                alt=""
              />
              <div class="p-2 top-part-content rounded">
                <span>heading</span>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  atque!
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

      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="row border rounded  mb-2 bg-white">
              <div class="col-sm-4">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <span class="lead">Technology</span>
                <br />
                <span>This is heading number one</span>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </span>
                <br />
                <span class="text-muted">Writter :sunny</span>
                <br />
                <span>28/12/1998</span>
              </div>
            </div>
            <div class="row border rounded  mb-2 bg-white">
              <div class="col-sm-4">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <span class="lead">Technology</span>
                <br />
                <span>This is heading number one</span>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </span>
                <br />
                <span class="text-muted">Writter :sunny</span>
                <br />
                <span>28/12/1998</span>
              </div>
            </div>
            <div class="row border rounded bg-white mb-2">
              <div class="col-sm-4">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <span class="lead">Technology</span>
                <br />
                <span>This is heading number one</span>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </span>
                <br />
                <span class="text-muted">Writter :sunny</span>
                <br />
                <span>28/12/1998</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4 ">
            <div class="right-blog">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="card mt-3 bg-dark text-white">
              <div class="card-body">
                <p class="card-text">Add Box</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Blogs;
