import React from 'react';
import { MyNavbar } from '../components/navbar';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { MyFooter } from '../components/myfooter'
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";

export const ContactUsPage = () => {
  return (
    <div>
      <MyNavbar />
      {/* Form  */}
      <Container>
        <Row className='text-white g-2'>
          {/* column #1 */}
          <Col style={{}}>

            <h1>Contact Information</h1>
            <h4>Reach out to us at</h4>

            <div style={{ marginLeft: "-28px" }}>


              <ul style={{ listStyle: "none" }}>
                <li><LuPhone /> Phone No.</li>
                <li><HiOutlineMail /> example@demo.com</li>
                <li><TfiLocationPin /> Factory no 2 & 3, P & S Agrovet Private Limited, Near Kalyan Phata, Indian Oil,Petrol Pump, Opp. Comfort Cabin, Kalyan Phata - 421208</li>
              </ul>

              {/* google map location  */}

              <div className="pt-3 px-4 lg:px-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241357.33813039836!2d72.77714641145042!3d19.054572403197305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c07af19a76e7%3A0xdfef34609689ad1e!2sP%26S%20Agro!5e0!3m2!1sen!2sin!4v1705691599268!5m2!1sen!2sin"
                  allowFullScreen=""
                  className="w-100 h-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ height: '200px' }}>
                </iframe>
              </div>
            </div>


          </Col>

          {/* column #2 */}
          <Col>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter Phone Number" />

                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Message</Form.Label>
                <Form.Control placeholder="Enter Message" />
              </Form.Group>

              <Button variant="danger " type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>

      <MyFooter />
    </div>
  );
};
