import * as React from "react";
import { Container } from "react-bootstrap";
const Skills = (props) => {
  return (
    <Container className="my-5 custom-scroll" id="skills">
      <h1 className="text-center mt-5 mb-4">Tools I have worked with:</h1>
      <h2 className="text-center mt-3">Front-end: </h2>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {props.frontendSkills.map((skill, index) => {
          return (
            <div className=" p-2 m-2" key={index}>
              {skill.icon}
              <p className="text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-center mt-4">Back-end: </h2>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {props.backendSkills.map((skill, index) => {
          return (
            <div className=" p-2 m-2" key={index}>
              {skill.icon}
              <p className="text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
      <h2 className="text-center mt-4">Other: </h2>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {props.otherSkills.map((skill, index) => {
          return (
            <div className=" p-2 m-2" key={index}>
              {skill.icon}
              <p className="text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
