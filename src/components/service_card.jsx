import React from "react";
import { Slide } from "react-awesome-reveal";
import { Card, Col, Row, ListGroup } from "react-bootstrap";

export const ServiceCard = () => {
  return (
    <>
      <section className="bg-black py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-white text-center">
                Our Services
              </h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                At S1Media, we offer a range of services designed to showcase
                your business:
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container-fluid">
                <Row className="gy-3 gy-md-4 d-md-ms-2">
                  <Slide>
                    <Row>
                      {/* Card 1  */}
                      <Col lg={4} md={6} className="col-12 mb-3">
                        <Card className="card border-dark">
                          <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                            <div className="me-3 text-primary">
                              <img
                                src="real_estate.svg"
                                width={48}
                                height={48}
                                alt="Real Estate"
                              />
                            </div>
                            <div>
                              <h4 className="mb-1 text-white">Real Estate</h4>
                              <ul
                                className="text-secondary"
                                style={{ listStyle: "none", padding: "0" }}
                              >
                                <li>Video tours of properties</li>
                                <li>
                                  Highlighting unique features and amenities
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </Col>

                      {/* Card 2  */}
                      <Col lg={4} md={6} className="col-12 mb-3">
                        <Card className="card border-dark">
                          <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                            <div className="me-3 text-primary">
                              <img
                                src="cooking.svg"
                                width={48}
                                height={48}
                                alt="Cooking Tips"
                              />
                            </div>
                            <div>
                              <h4 className="mb-1 text-white">Cooking Tips</h4>
                              <ul
                                className="text-secondary"
                                style={{ listStyle: "none", padding: "0" }}
                              >
                                <li>Step-by-step cooking videos</li>
                                <li>
                                  Featuring professional chefs and home cooks
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </Col>

                      {/* Card 3  */}

                      <Col lg={4} md={6} className="col-12 ">
                        <Card className="card border-dark">
                          <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                            <div className="me-3 text-primary">
                              <img
                                src="restaurant.svg"
                                width={48}
                                height={48}
                                alt="Restaurant"
                              />
                            </div>
                            <div>
                              <h4 className="mb-1 text-white">Restaurant</h4>
                              <ul
                                className="text-secondary"
                                style={{ listStyle: "none", padding: "0" }}
                              >
                                <li>
                                  Capturing the ambiance and culinary delights
                                </li>
                                <li>Showcasing special dishes and events</li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Slide>

                  <Slide>
                    <Row>
                      {/* Card 4  */}
                      <Col lg={4} md={6} className="col-12 mb-3">
                        <Card className="card border-dark">
                          <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                            <div className="me-3 text-primary">
                              <img
                                src="hotel.svg"
                                width={48}
                                height={48}
                                alt="Hotel"
                              />
                            </div>
                            <div>
                              <h4 className="mb-1 text-white">
                                Hotels (3-star, 4-star, 5-star)
                              </h4>
                              <ul
                                className="text-secondary"
                                style={{ listStyle: "none", padding: "0" }}
                              >
                                <li>Virtual tours of hotel facilities</li>
                                <li>
                                  Highlighting services and guest experience
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </Col>
                      {/* Card 5  */}

                      <Col lg={4} md={6} className="col-12">
                        <Card className="card border-dark">
                          <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                            <div className="me-3 text-primary">
                              <img
                                src="agriculture.svg"
                                width={48}
                                height={48}
                                alt="Agriculture"
                              />
                            </div>
                            <div>
                              <h4 className="mb-1 text-white">Agriculture</h4>
                              <ul
                                className="text-secondary"
                                style={{ listStyle: "none", padding: "0" }}
                              >
                                <li>
                                  Documenting agricultural processes and
                                  products
                                </li>
                                <li>
                                  Showcasing innovative farming techniques
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Slide>
                </Row>
              </div>
            </div>
          </div>
        </div>

        {/* How it works  */}
        <div className="container mt-4 pt-4">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-white text-center">
                How it works
              </h2>

              <ListGroup className="bg-black">
                <ListGroup.Item
                  data-number="1"
                  className="list-group-item bg-black text-white"
                >
                  Our team visits your location to shoot high-quality video
                  content.
                </ListGroup.Item>
                <ListGroup.Item
                  data-number="2"
                  className="list-group-item bg-black text-white"
                >
                  We edit and produce engaging videos.
                </ListGroup.Item>
                <ListGroup.Item
                  data-number="3"
                  className="list-group-item bg-black text-white"
                >
                  We upload the videos to our YouTube channel and share them on
                  social media.
                </ListGroup.Item>
                <ListGroup.Item
                  data-number="4"
                  className="list-group-item bg-black text-white"
                >
                  Enjoy two years of free marketing, with an option to continue
                  for a small daily fee thereafter.
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
