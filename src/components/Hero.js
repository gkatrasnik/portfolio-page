import * as React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import cv from "../assets/cv.pdf";

const Hero = () => {
  return (
    <Container className="mb-5 custom-scroll screenheight" id="aboutme">
      <Row className="h-100">
        <Col className=" d-md-flex flex-row-reverse  justify-content-evenly align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <StaticImage
              src="../images/gk.jpg"
              alt="Gašper Katrašnik"
              height={200}
              width={200}
              className="rounded-circle border border-white"
              quality={100}
            />
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-start justify-content-center">
              <div className="d-flex flex-row ">
                <h3>Hi, I am </h3>
                <h3 className="text-primary px-2"> Gašper Katrašnik</h3>
              </div>

              <h1 className="mb-3">Full-stack developer</h1>
              <h3 className="mb-4">from Slovenia</h3>

              <div className="d-flex flex-row justify-content-center align-items-center">
                <Button href="#projects" className="me-3">
                  Projects
                </Button>
                <Button href="#skills" className="me-3">
                  Skills
                </Button>
                <Button variant="secondary" href="#contact" className="me-3">
                  Contact
                </Button>
                <Button variant="light" href={cv} download>
                  CV
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
