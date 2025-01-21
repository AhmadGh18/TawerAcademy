import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative w-80 h-80 mx-auto ">
        <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute top-20 right-14 w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        <div className="absolute bottom-16 left-16 w-5 h-5 rounded-full bg-primary animate-spin-slow"></div>
        <div className="absolute bottom-8 right-10 w-3 h-3 rounded-full bg-primary animate-ping"></div>
      </div>
    </div>
  );
};

export default Banner;
