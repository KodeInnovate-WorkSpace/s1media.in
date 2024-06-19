import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Row, Col } from "react-bootstrap";

export const MyFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="text-center text-lg-start text-black">
        <section>
          <Container className="text-center text-md-start mt-5">
            <Row className="">
              <Col md="3" lg="4" xl="3" className="mx-auto ">
                <Navbar.Brand>
                  <Link
                    to="/"
                    className="text-decoration-none text-danger text-uppercase"
                    onClick={scrollToTop}
                  >
                    <img
                      src="logo.svg"
                      alt="S1MEDIA"
                      width={120}
                      loading="lazy"
                    />
                  </Link>
                </Navbar.Brand>

                <p className="mt-2">
                  S1Media is a dynamic media company dedicated to helping
                  businesses in the real estate, restaurant, culinary,
                  hospitality, and agricultural sectors enhance their online
                  presence.
                </p>
              </Col>

              <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
                <p>
                  <Link to="/" className=" text-black" onClick={scrollToTop}>
                    Home
                  </Link>
                </p>
                <p>
                  <Link
                    to="/about"
                    className=" text-black"
                    onClick={scrollToTop}
                  >
                    About Us
                  </Link>
                </p>
                <p>
                  <Link
                    to="/services"
                    className=" text-black"
                    onClick={scrollToTop}
                  >
                    Our Services
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact"
                    className="text-black"
                    onClick={scrollToTop}
                  >
                    Contact Us
                  </Link>
                </p>
              </Col>

              <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>Mahape Road</p>
                <p>info@s1media.in</p>
                <p>+91 8291492129</p>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="text-center p-4">
          © S1Media, 2024. All rights reserved.
        </div>
        <div
          className="text-center p-4"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Powered by{" "}
          <a href="https://kodeinnovate.in/" className="text-black">
            Kodeinnovate Solutions Private Limited
          </a>
        </div>
      </div>
    </>
  );
};
