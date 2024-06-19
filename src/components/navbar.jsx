import { Container, Navbar, Nav, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <Link
            to="/"
            className="text-decoration-none text-danger text-uppercase"
          >
            <img src="logo.svg" alt="S1MEDIA" width={160} loading="lazy" />
          </Link>
        </Navbar.Brand>

        {/* Spacer Element (Desktop View Only) */}
        <div
          className="d-none d-md-block"
          style={{ height: "20px", width: "900px" }}
        ></div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
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
            <Dropdown.Toggle
              variant="danger"
              style={{  color: "white" }}
              id="dropdown-basic"
            >
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right bg-white text-black border">
              <Link to={"/"} className="text-decoration-none">
                <span className="dropdown-item dropItem">Home</span>
              </Link>
              <Link to={"/about"} className="text-decoration-none">
                <span className="dropdown-item ">About Us</span>
              </Link>
              <Link to={"/services"} className="text-decoration-none">
                <span className="dropdown-item ">Our Services</span>
              </Link>
              <Link to={"/contact"} className="text-decoration-none">
                <span className="dropdown-item ">Contact Us</span>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
