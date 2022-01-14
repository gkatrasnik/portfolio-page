import * as React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import cv from "../assets/cv.pdf";

const Hero = () => {
  return (
    <Container className="mb-3 custom-scroll screenheight" id="aboutme">
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
              <h3 className="hero-text">Hello!</h3>
              <div className="d-flex flex-row ">
                <h2 className="hero-text">I am </h2>
                <h2 className="text-primary px-2 hero-text">
                  Gašper Katrašnik
                </h2>
              </div>

              <h4 className="mb-3">Full-stack Web Developer</h4>

              <div className="d-flex flex-row flex-wrap  align-items-center">
                <Button href="#projects" className="me-3 my-2">
                  Projects
                </Button>
                <Button href="#skills" className="me-3 my-2">
                  Skills
                </Button>
                <Button
                  variant="secondary"
                  href="#contact"
                  className="me-3 my-2"
                >
                  Contact
                </Button>
                <Button variant="light" className=" my-2" href={cv} download>
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
