import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";

const Contact = () => {
  return (
    <Container className="my-5 custom-scroll" id="contact">
      <h1 className="text-center">Contact me</h1>

      <div className="d-flex flex-row justify-content-center flex-wrap">
        <Social />
        <Social />
        <Social />
      </div>
    </Container>
  );
};

export default Contact;
