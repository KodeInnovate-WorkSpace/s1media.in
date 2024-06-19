import React from "react";
import { Fade } from "react-awesome-reveal";

const CenterHero = ({ title, content, img }) => {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center  text-black">
        {/* image */}
        <div className="overflow-hidden" style={{ maxHeight: "65vh" }}>
          <div className="container px-5">
            <Fade>
              <img
                src={img}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
                loading="lazy"
              />
            </Fade>
          </div>
        </div>

        <h1 className="display-4 fw-bold">{title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{content}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"></div>
        </div>
      </div>
    </>
  );
};

export default CenterHero;
