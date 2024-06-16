import React from "react";

const Hero = ({title, content, img}) => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 bg-black text-white">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* Image  */}
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
            <p className="lead">
              {content}
            </p>
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-danger btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-lg px-4"
              >
                Default
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

// *Our Mission*
// Our mission is to provide businesses with a platform to reach a larger audience through engaging video content, enhancing their visibility and growth without upfront costs.

export default Hero;
