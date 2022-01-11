import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" border-bottom border-secondary
      "
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container>
        {/*<Navbar.Brand>
          <Nav.Link href="#aboutme">
            <h3 className="text-white">Gašper Katrašnik</h3>
          </Nav.Link>
        </Navbar.Brand>*/}

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
