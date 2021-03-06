import * as React from "react";
import { Container } from "react-bootstrap";
const Skills = (props) => {
  return (
    <Container className="my-5 py-5 ">
      <h1 className="text-center  mb-4 custom-scroll" id="skills">
        Tools I have worked with:
      </h1>
      <h2 className="text-center mt-3">Front-end: </h2>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {props.frontendSkills.map((skill, index) => {
          return (
            <div
              className=" p-2 m-2 d-flex flex-column justify-content-center align-items-center"
              key={index}
            >
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
            <div
              className=" p-2 m-2 d-flex flex-column justify-content-center align-items-center"
              key={index}
            >
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
            <div
              className=" p-2 m-2 d-flex flex-column justify-content-center align-items-center"
              key={index}
            >
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
