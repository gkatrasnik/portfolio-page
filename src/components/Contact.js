import * as React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="my-5 custom-scroll" id="contact">
      <h1 className="text-center">Contact me!</h1>
      <div className="d-flex flex-column justify-content-center  my-3">
        <a href="mailto:gkatrasnik@gmail.com" className="text-center mt-2">
          <h3>gkatrasnik@gmail.com</h3>
        </a>
        <div className="d-flex flex-row justify-content-center flex-wrap mb-3">
          <a
            href="https://www.linkedin.com/in/gasperkatrasnik/"
            className="m-3"
          >
            <i class="devicon-linkedin-plain "></i>
          </a>

          <a href="https://github.com/gkatrasnik" className="m-3">
            <i class="devicon-github-original "></i>
          </a>

          <a href="https://twitter.com/gasperkatrasnik" className="m-3">
            <i class="devicon-twitter-original"></i>
          </a>
          <a href="https://www.facebook.com/gasper.katrasnik/" className="m-3">
            <i class="devicon-facebook-original"></i>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
