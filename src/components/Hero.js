import * as React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Hero = () => {
  return (
    <Container className="my-5 custom-scroll" id="aboutme">
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-start justify-content-center">
            <div className="d-flex flex-row ">
              <h3>Hi, I am </h3>
              <h3 className="text-primary px-2"> Gašper Katrašnik</h3>
            </div>

            <h1 className="mb-4">Full-stack developer</h1>
            <h4>from Slovenia</h4>

            <div className="d-flex flex-row justify-content-center align-items-center">
              <Button href="#projects">Projects</Button>
              <Button href="#skills" className="mx-3">
                Skills
              </Button>
              <Button variant="secondary" href="#contact">
                Contact
              </Button>
            </div>
          </div>
        </Col>
        <Col className="d-none d-md-block">
          <StaticImage src="../images/hero.png" alt="hero image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
