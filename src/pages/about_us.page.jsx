import React from 'react'
import {MyNavbar} from '../components/navbar'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { MyFooter } from '../components/myfooter'
import Button from 'react-bootstrap/Button';

export const AboutUsPage = () => {
  return (
    //  Gemini 
    <>
      <MyNavbar />

      <div className="about-us text-white">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h1>About Us</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </Col>
          </Row>

          {/* client Testimony  */}
          <div className='mt-4 gap-2 d-flex justify-content-center'>
            <Row className="justify-content-center">
              <h2 className='text-center mt-4'>Client Testimony</h2>
              <Card border="dark text-white m-2" style={{ width: '18rem', backgroundColor: "black" }}>
                <Card.Header className='bg-black fs-5'>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card border="dark text-white m-2" style={{ width: '18rem', backgroundColor: "black" }}>
                <Card.Header className='bg-black fs-5'>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card border="dark text-white m-2" style={{ width: '18rem', backgroundColor: "black" }}>
                <Card.Header className='bg-black fs-5'>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </div>


          {/* Team members  */}

          <div className='d-flex gap-2 mt-4'>

            <Row className="justify-content-center">

              <h2 className='text-center mt-4'>Team Members</h2>

              <Card className='border m-2 bg-black' style={{ width: '18rem', color: 'white' }}>
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>

              </Card>

              <Card className='border m-2 bg-black' style={{ width: '18rem', color: 'white' }}>
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card className='border m-2 bg-black' style={{ width: '18rem', color: 'white' }}>
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card className='border m-2 bg-black' style={{ width: '18rem', color: 'white' }}>
                <Card.Img variant="top" src="placeholder.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>

          </div>

        </Container>

        <MyFooter />
      </div>
    </>

  )
}
