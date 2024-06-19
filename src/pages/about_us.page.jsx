import React from "react";
import { MyNavbar } from "../components/navbar";
import { Col, Container, Row, Card } from "react-bootstrap";
import { MyFooter } from "../components/myfooter";
import { Fade } from "react-awesome-reveal";
import CenterHero from "../components/center_hero";

export const AboutUsPage = () => {
  return (
    <>
      <MyNavbar />

      <div className="about-us text-white">
        <Container>
          <CenterHero
            title="About Us"
            content="S1MEDIA is a dynamic media company dedicated to helping
                businesses in the real estate, restaurant, culinary,
                hospitality, and agricultural sectors enhance their online
                presence. Based on Mahape Road, our team of skilled shooting
                editors travels to your location to create stunning video
                content that we share across our YouTube channel and social
                media platforms."
            img="about.jpeg"
          />

          {/* Why Choose Us  */}
          <div className="mt-4 gap-2 d-flex justify-content-center">
            <Fade>
              <Row className="justify-content-center">
                <h2 className="text-center mt-4 text-black">Why Choose Us?</h2>
                <Card
                  border="dark text-black m-2"
                  style={{
                    width: "19rem",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Free Shooting</Card.Title>
                    <Card.Text
                      className="text-black"
                      style={{ userSelect: "none" }}
                    >
                      We do not charge for shooting your property or business.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  border="dark text-black m-2"
                  style={{
                    width: "19rem",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Free Marketing for 2 Years</Card.Title>
                    <Card.Text
                      className="text-black"
                      style={{ userSelect: "none" }}
                    >
                      Enjoy two years of free marketing on our YouTube channel
                      and social media.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  border="dark text-black m-2"
                  style={{
                    width: "19rem",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Affordable Rates</Card.Title>
                    <Card.Text
                      className="text-black"
                      style={{ userSelect: "none" }}
                    >
                      After two years, continue your marketing.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Fade>
          </div>

          {/* Team members  */}

          {/* <div className="d-flex gap-2 mt-4">
            <Row className="justify-content-center">
              <h2 className="text-center mt-4">Team Members</h2>

              <Card
                className="border m-2 bg-black"
                style={{ width: "18rem", color: "white" }}
              >
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card
                className="border m-2 bg-black"
                style={{ width: "18rem", color: "white" }}
              >
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card
                className="border m-2 bg-black"
                style={{ width: "18rem", color: "white" }}
              >
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card
                className="border m-2 bg-black"
                style={{ width: "18rem", color: "white" }}
              >
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
          </div> */}
        </Container>

        <MyFooter />
      </div>
    </>
  );
};
