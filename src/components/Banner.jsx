import React from "react";
import img from "../assets/cleanup.png";
import img2 from "../assets/bg.png";
import HomeText from "./HomeText";
import HomePage from "./Home";
const Banner = () => {
  return (
    <div
      className=" bg-cover bg-center h-[85vh] bg-none"
      style={{ backgroundImage: `url(${img2})` }}
    >
      <HomeText />
    </div>
  );
};

export default Banner;
