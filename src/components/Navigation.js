import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="mx-2">
          <Nav.Link href="#aboutme" className=" p-0">
            <h1 className="text-primary border-bottom border-secondary m-0 logofont">
              GK
            </h1>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <>
            <Nav>
              <Nav.Link href="#aboutme" eventKey="1" className="text-white">
                About Me
              </Nav.Link>

              <Nav.Link href="#projects" eventKey="2" className="text-white">
                Projects
              </Nav.Link>

              <Nav.Link href="#skills" eventKey="3" className="text-white">
                Skills
              </Nav.Link>

              <Nav.Link href="#contact" eventKey="4" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
