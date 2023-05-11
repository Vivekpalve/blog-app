import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "../components/Footer.css";
const Footer = () => {
  return (
    <div className="containerd">
      <MDBFooter className="bg-dark text-center text-white">
        <div className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.linkedin.com/in/vivek-palve-667248195/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Vivekpalve.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;
