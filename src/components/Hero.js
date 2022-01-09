import * as React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Hero = () => {
  return (
    <Container className="my-5 custom-scroll" id="aboutme">
      <Row>
        <Col className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div>
            <div className="d-flex flex-row ">
              <h4>Gašper Katrašnik</h4>
            </div>

            <h1>Full-stack developer</h1>
            <p>Motivated and passionate web developer</p>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <Button href="/projects" className="m-2">
                Projects
              </Button>
              <Button href="/skills" className="m-2">
                Skills
              </Button>
              <Button href="/contact" className="m-2">
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
