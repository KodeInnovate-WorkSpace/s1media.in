import React from "react";

const ReverseHero = ({ title, content, img }) => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 text-black">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
            <p className="lead">{content}</p>
          </div>

          {/* Image  */}
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid"
              alt="Image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReverseHero;
