import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const MyFooter = () => {
  return (
    <>
      <div className="text-center text-lg-start bg-black text-white">
        <section>
          <Container className="text-center text-md-start mt-5">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i icon="gem" className="me-3" />
                  S1Media
                </h6>
                <p>
                  S1Media is a dynamic media company dedicated to helping
                  businesses in the real estate, restaurant, culinary,
                  hospitality, and agricultural sectors enhance their online
                  presence.
                </p>
              </Col>

              <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
                <p>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/services" className="text-white">
                    Our Services
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-white">
                    Contact Us
                  </a>
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
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Powered by{" "}
          <a
            href="https://kodeinnovate.in/"
            className="text-white text-decoration-none"
          >
            Kodeinnovate Solutions Private Limited
          </a>
        </div>
      </div>
    </>
  );
};
