import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className="floating-button" onClick={scrollToTop}>
      {/* <FaArrowUpLong /> */}
      <img
        src="up-arrow.svg"
        alt="Go to top"
        width={25}
        style={{ background: "none" }}
      />
    </button>
  );
};

export default TopButton;
