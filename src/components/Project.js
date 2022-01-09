import * as React from "react";
import { Card, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Project = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img src={props.project.image} />
      <Card.Body>
        <Card.Title>{props.project.text}</Card.Title>
        <Card.Text>{props.project.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={props.project.github} as={Button}>
          Github
        </Card.Link>
        {props.project.live && (
          <Card.Link href={props.project.live} as={Button}>
            Live Site
          </Card.Link>
        )}
      </Card.Footer>
    </Card>
  );
};

export default Project;
