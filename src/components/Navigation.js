import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-light border-bottom
      "
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link href="#aboutme">
            <h3>Gašper Katrašnik</h3>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <>
            <Nav>
              <Nav.Link href="#aboutme" eventKey="1">
                About Me
              </Nav.Link>

              <Nav.Link href="#projects" eventKey="2">
                Projects
              </Nav.Link>

              <Nav.Link href="#skills" eventKey="3">
                Skills
              </Nav.Link>

              <Nav.Link href="#contact" eventKey="4">
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
