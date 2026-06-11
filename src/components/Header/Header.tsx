import { Container, Nav, Navbar } from "react-bootstrap";
import {
  Basket2Fill,
  PlusCircleFill,
  Shop,
  InfoCircleFill,
  EnvelopeFill,
  GearFill,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/pages/home"
          className="fw-bold fs-4"
        >
          <Shop className="me-2 mb-1" />
          Name Brand
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link
              as={NavLink}
              to="/pages/home"
              className="d-flex align-items-center gap-2"
            >
              <Basket2Fill />
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/pages/about"
              className="d-flex align-items-center gap-2"
            >
              <InfoCircleFill />
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/pages/contacts"
              className="d-flex align-items-center gap-2"
            >
              <EnvelopeFill />
              Contact
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/pages/divisions"
              className="d-flex align-items-center gap-2"
            >
              <PlusCircleFill />
              Divisions
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/pages/admin"
              className="d-flex align-items-center gap-2"
            >
              <GearFill />
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;