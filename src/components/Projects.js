import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
const Projects = (props) => {
  return (
    <Container className="my-5 py-5 ">
      <h1 className="text-center mb-3 custom-scroll" id="projects">
        Projects I am proud of:
      </h1>
      <Row>
        {props.projects.map((item, index) => {
          return (
            <Col className="d-flex justify-content-center " key={index}>
              <Project project={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
