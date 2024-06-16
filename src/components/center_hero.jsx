import React from "react";

const CenterHero = ({ title , content, img }) => {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center bg-black text-white">
        {/* image */}
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
                    <div className="container px-5">
                        <img src={img} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>

        <h1 className="display-4 fw-bold">{title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
           {content}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            {/* <button type="button" className="btn btn-danger btn-lg px-4 me-sm-3">Primary button</button>
                        <button type="button" className="btn btn-outline-danger btn-lg px-4">Secondary</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

/*
*Welcome to S1Media*

At S1Media, we specialize in showcasing your properties, restaurants, cooking tips, hotels, and agricultural ventures through high-quality videos. Our team of professional shooting editors is dedicated to capturing the essence of your business and sharing it with a wide audience on YouTube and various social media platforms. We offer two years of free marketing, and after that, our rates are incredibly affordable at just 50 RS per day.

*Our Mission*
Our mission is to provide businesses with a platform to reach a larger audience through engaging video content, enhancing their visibility and growth without upfront costs.

*/

export default CenterHero;
