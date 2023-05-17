import React from "react";
import Base from "../components/Base";
import "../pages/Services.css";

const Services = () => {
  const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

  let modal = function (modaLCLick) {
    modalViews[modaLCLick].classList.add("active-modal");
  };

  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      modal(i);
    });
  });
  modalCloses.forEach((modaLCLose) => {
    modaLCLose.addEventListener("click", () => {
      modalViews.forEach((modaLView) => {
        modaLView.classList.remove("active-modal");
      });
    });
  });
  return (
    <div>
      <Base>
        <section className="services section" id="services">
          <h2 className="section__title text-center">What I offers</h2>
          {/* <h6 className="text-center">What I offer</h6> */}
          {/* <span className="section__subtitle text-center">what i offer</span> */}

          <div className="services__container container grid">
            {/* <!-- SERVICES 1--> */}
            <div className="services__content">
              <div>
                <i className="fa-solid fa-laptop-code services__icon"></i>
                <h3 className="services__title">
                  App
                  <br />
                  Development
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View More
                <i class="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    App
                    <br />
                    Development
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I am fresher Student in this .</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I can't give any services to you right now.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>But soon....</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- SERVICES 2 --> */}
            <div className="services__content">
              <div>
                <i className="fa-solid fa-laptop-code services__icon"></i>
                <h3 className="services__title">
                  Web
                  <br />
                  Development
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Web
                    <br />
                    Developer
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I am fresher Student in this .</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I can't give any services to you right now.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>But soon....</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- SERVICES 3 --> */}
            <div className="services__content">
              <div>
                <i className="fa-solid fa-laptop-code services__icon"></i>
                <h3 className="services__title">
                  Backend
                  <br />
                  Development
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Backend
                    <br />
                    Developer
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I am fresher Student in this .</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I can't give any services to you right now.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>But soon....</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- SERVICES 4 --> */}
            <div className="services__content">
              <div>
                <i className="fa-solid fa-laptop-code services__icon"></i>
                <h3 className="services__title">
                  Full Stack
                  <br />
                  Development
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Full Stack
                    <br />
                    Developer
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I am fresher Student in this .</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I can't give any services to you right now.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>But soon....</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Base>
    </div>
  );
};

export default Services;
