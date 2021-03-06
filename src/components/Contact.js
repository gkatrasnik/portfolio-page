import * as React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="my-5 py-5 ">
      <h1 className="text-center custom-scroll" id="contact">
        Contact me!
      </h1>
      <div className="d-flex flex-column justify-content-center  my-3">
        <a href="mailto:gkatrasnik@gmail.com" className="text-center mt-2">
          <h3>gkatrasnik@gmail.com</h3>
        </a>
        <div className="d-flex flex-row justify-content-center flex-wrap mb-3">
          <a
            href="https://www.linkedin.com/in/gasperkatrasnik/"
            className="m-3"
          >
            <i className="devicon-linkedin-plain "></i>
          </a>

          <a href="https://github.com/gkatrasnik" className="m-3">
            <i className="devicon-github-original "></i>
          </a>

          <a href="https://twitter.com/gasperkatrasnik" className="m-3">
            <i className="devicon-twitter-original"></i>
          </a>
          <a href="https://www.facebook.com/gasper.katrasnik/" className="m-3">
            <i className="devicon-facebook-original"></i>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
