import React from "react";
import { Slide } from "react-awesome-reveal";
import { ListGroup } from "react-bootstrap";
import Hero from "./hero";
import ReverseHero from "./reverse_hero";

export const ServiceCard = () => {
  const serviceInfo = [
    {
      title: "Deal Done Brokers",
      desc: "Video tours of properties and Highlighting uniue features and amenities",
      image: "real_estate.jpeg",
    },
    {
      title: "The Restro",
      desc: "Capturing the ambiance & culinary delights and Showcasing special dishes & events",
      image: "restaurant.jpeg",
    },
    {
      title: "Autoz Plus",
      desc: "Updates on new and old cars and bikes, buy and sell opportunities, market trends",
      image: "autoz.png",
    },
    {
      title: "The Foodizz",
      desc: "Step-by-step cooking videos and featuring professional chefs and home cooks",
      image: "cooking_tips.jpeg",
    },

    {
      title: "The Multi Business",
      desc: "Capturing the essence of your business, one frame at a time. We cater multiple businesses",
      image: "hotel.jpeg",
    },
  ];

  return (
    <>
      <section className="bg-white py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-black text-center">
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
                {/* Row here  */}

                {serviceInfo.map((info) => (
                  <Slide key={info.title}>
                    <Hero
                      title={info.title}
                      content={info.desc}
                      img={info.image}
                    />
                  </Slide>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How it works  */}
        <div className="container mt-4 pt-4">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-black text-center">
                How it works
              </h2>

              <ListGroup className="bg-white">
                <ListGroup.Item
                  data-number="1"
                  className="list-group-item bg-white text-black"
                >
                  Our team visits your location to shoot high-quality video
                  content.
                </ListGroup.Item>
                <ListGroup.Item
                  data-number="2"
                  className="list-group-item bg-white text-black"
                >
                  We edit and produce engaging videos.
                </ListGroup.Item>
                <ListGroup.Item
                  data-number="3"
                  className="list-group-item bg-white text-black"
                >
                  We upload the videos to our YouTube channel and share them on
                  social media.
                </ListGroup.Item>
                <ListGroup.Item
                  data-number="4"
                  className="list-group-item bg-white text-black"
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
