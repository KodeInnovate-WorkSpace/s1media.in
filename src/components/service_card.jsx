import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

export const ServiceCard = () => {
  return (
    <>
      <section className="bg-black  py-3 py-md-5 py-xl-8">
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
                <div className="row gy-3 gy-md-4">
                  {/* Card 1  */}
                  <Col lg={4} className="col-12">
                    <Card className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="red"
                            className="bi bi-basket2-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                          </svg> */}
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
                            <li>Highlighting unique features and amenities</li>
                          </ul>
                          {/* 
                          <p className="m-0 text-secondary">
                            Video tours of properties
                          </p>
                          <p className="m-0 text-secondary">
                            Highlighting unique features and amenities
                          </p> */}
                        </div>
                      </div>
                    </Card>
                  </Col>
                  {/* Card 2  */}

                  <Col lg={4} className="col-12">
                    <Card className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="red"
                            className="bi bi-basket2-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                          </svg> */}
                          <img
                            src="restaurant.svg"
                            width={48}
                            height={48}
                            alt="Real Estate"
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
                          {/* 
                          <p className="m-0 text-secondary">
                            Video tours of properties
                          </p>
                          <p className="m-0 text-secondary">
                            Highlighting unique features and amenities
                          </p> */}
                        </div>
                      </div>
                    </Card>
                  </Col>
                  {/* Card 3  */}
                  <Col lg={4} className="col-12">
                    <Card className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="red"
                            className="bi bi-basket2-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                          </svg> */}
                          <img
                            src="cooking.svg"
                            width={48}
                            height={48}
                            alt="Real Estate"
                          />
                        </div>
                        <div>
                          <h4 className="mb-1 text-white">Cooking Tips</h4>

                          <ul
                            className="text-secondary"
                            style={{ listStyle: "none", padding: "0" }}
                          >
                            <li>Step-by-step cooking videos</li>
                            <li>Featuring professional chefs and home cooks</li>
                          </ul>
                          {/* 
                          <p className="m-0 text-secondary">
                            Video tours of properties
                          </p>
                          <p className="m-0 text-secondary">
                            Highlighting unique features and amenities
                          </p> */}
                        </div>
                      </div>
                    </Card>
                  </Col>
                  {/* Card 4  */}
                  <Col lg={4} className="col-12">
                    <Card className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="red"
                            className="bi bi-basket2-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                          </svg> */}
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
                            <li>Highlighting services and guest experience</li>
                          </ul>
                          {/* 
                          <p className="m-0 text-secondary">
                            Video tours of properties
                          </p>
                          <p className="m-0 text-secondary">
                            Highlighting unique features and amenities
                          </p> */}
                        </div>
                      </div>
                    </Card>
                  </Col>
                  {/* Card 5  */}
                  <Col lg={4} className="col-12">
                    <Card className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="red"
                            className="bi bi-basket2-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                          </svg> */}
                          <img
                            src="agriculture.svg"
                            width={48}
                            height={48}
                            alt="Real Estate"
                          />
                        </div>
                        <div>
                          <h4 className="mb-1 text-white">Agriculture</h4>

                          <ul
                            className="text-secondary"
                            style={{ listStyle: "none", padding: "0" }}
                          >
                            <li>
                              Documenting agricultural processes and products
                            </li>
                            <li>Showcasing innovative farming techniques</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works  */}
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-white text-center">
                How it works
              </h2>

              {/* <ListGroup className="bg-black">
                <ListGroup.Item className="bg-black text-white">
                  Our team visits your location to shoot high-quality video
                  content.
                </ListGroup.Item>
                <ListGroup.Item className="bg-black text-white">
                  We edit and produce engaging videos.
                </ListGroup.Item>
                <ListGroup.Item className="bg-black text-white">
                  We upload the videos to our YouTube channel and share them on
                  social media.
                </ListGroup.Item>
                <ListGroup.Item className="bg-black text-white">
                  Enjoy two years of free marketing, with an option to continue
                  for a small daily fee thereafter.
                </ListGroup.Item>
              </ListGroup> */}

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
