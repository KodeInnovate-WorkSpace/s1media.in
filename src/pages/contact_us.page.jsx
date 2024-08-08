// Contact.jsx
import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

import { MyFooter } from "../components/myfooter";
import { MyNavbar } from "../components/navbar";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Office:",
      value: "Kalyan Phata Near HP Petrol Pump",
    },
    {
      icon: <FaPhone />,
      label: "Phone No:",
      value: "+91 8291492129",
    },
    {
      icon: <FaEnvelope />,
      label: "Email:",
      value: "info@s1media.in",
    },
  ];

  // const socialMediaIcons = [
  //   <FaTwitter key="twitter" />,
  //   <FaFacebookF key="facebook" />,
  //   <FaYoutube key="youtube" />,
  //   "Twitter",
  //   "Facebook",
  //   "Youtube",
  // ];

  return (
    <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      {contactInfo.map((info, index) => (
        <React.Fragment key={index}>
          <p className="mb-2 text-black">{info.label}</p>
          <h4 className="fw-bold text-black">
            {info.icon} {info.value}
          </h4>
          <hr className="w-100" />
        </React.Fragment>
      ))}
      {/* <p className="mb-2 text-black">Our Socials:</p> */}
      <div className="d-flex pt-2">
        {/* {socialMediaIcons.map((icon, index) => (
          <a
            key={index}
            style={{ backgroundColor: "#bb2d3b", color: "white" }}
            className="btn btn-square me-2"
            href=""
          >
            {icon}
          </a>
        ))} */}
      </div>
    </div>
  );
};

const MyForm = () => {
  return (
    <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
      <p className="mb-4 text-black">
        We would love to hear from you! Whether you have questions about our
        services or are ready to get started, feel free to reach out to us.
      </p>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-black">First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="text-black">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-black">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="text-black">Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label className="text-black">Message</Form.Label>
          <Form.Control placeholder="Enter Message" />
        </Form.Group>

        <Button variant="danger" type="submit" style={{ color: "white" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6"   style={{ marginBottom: "-20px" }}>
              <h1
                className="display-5 mb-0 text-black"
                style={{ marginTop: "-30px" }}
              >
                Contact Us
              </h1>
            </div>
          </div>
          <div className="row g-5 text-white">
            <ContactDetails />
            <MyForm />
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Contact;
