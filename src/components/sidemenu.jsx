import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { Link } from "react-router-dom";

function Sidemenu() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <Link
            to="/"
            className="text-decoration-none text-danger text-uppercase"
          >
            S1Media
          </Link>
        </Navbar.Brand>

        {/* Spacer Element (Desktop View Only) */}
        <div
          className="d-none d-md-block"
          style={{ height: "20px", width: "900px" }}
        ></div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          {/* Desktop Navigation Links */}
          <Nav className=" d-md-none d-xs-block">
            <Link to="/" className="text-decoration-none text-black">
              Home
            </Link>
            <Link to="/about" className="text-decoration-none text-black">
              About Us
            </Link>
            <Link to="/services" className="text-decoration-none text-black">
              Our Services
            </Link>
            <Link to="/contact" className="text-decoration-none text-black">
              Contact Us
            </Link>
          </Nav>

          {/* Desktop Menu Dropdown */}

          <Dropdown as={ButtonGroup} className="d-none d-md-block">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right bg-black text-white border">
              <Link to={"/"} className="text-decoration-none">
                <div className="dropdown-item text-white">Home</div>
              </Link>
              <Link to={"/about"} className="text-decoration-none">
                <div className="dropdown-item text-white">About Us</div>
              </Link>
              <Link to={"/services"} className="text-decoration-none">
                <div className="dropdown-item text-white">Our Services</div>
              </Link>
              <Link to={"/contact"} className="text-decoration-none">
                <div className="dropdown-item text-white">Contact Us</div>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidemenu;
