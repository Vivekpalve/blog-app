import React from "react";
import Base from "../components/Base";
import userContext from "../context/UserContext";
import "../pages/About.css";
const About = () => {
  return (
    <userContext.Consumer>
      {(user) => (
        <div>
          <Base>
            <div class="container mm bg-light py-5">
              <div class=" py-5">
                <div class="row mb-4 ">
                  <div class="col-lg-5 text-center">
                    <h2 class="display-4 font-weight-light">Our team</h2>
                    <p class="font-italic text-muted">
                      Together we achieve more, for our team is greater than the
                      sum of its parts.
                    </p>
                  </div>
                </div>

                <div class="row text-center">
                  {/* <!-- Team item--> */}
                  <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                        alt=""
                        width="100"
                        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 class="mb-0">Pranvi Palve</h5>
                      <span class="small text-uppercase text-muted">
                        React-Developer
                      </span>
                      <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End--> */}

                  {/* <!-- Team item--> */}
                  <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                        alt=""
                        width="100"
                        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 class="mb-0">Vivek Palve</h5>
                      <span class="small text-uppercase text-muted">
                        Java - Developer
                      </span>
                      <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End--> */}

                  {/* <!-- Team item--> */}
                  <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                        alt=""
                        width="100"
                        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 class="mb-0">Manoj Ghodke</h5>
                      <span class="small text-uppercase text-muted">
                        Python - Developer
                      </span>
                      <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End--> */}

                  {/* <!-- Team item--> */}
                  <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                        alt=""
                        width="100"
                        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 class="mb-0">Pratik Nivdange</h5>
                      <span class="small text-uppercase text-muted">
                        Web - Developer
                      </span>
                      <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="social-link">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End--> */}
                </div>
              </div>
            </div>
            {/* <!-- End--> */}
            {/* </div> */}
          </Base>
        </div>
      )}
    </userContext.Consumer>
  );
};

export default About;
