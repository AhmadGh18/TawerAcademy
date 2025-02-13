import React, { useEffect, useState } from "react";
import model from "../assets/removebg-image (1).png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeText = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for fade-in

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);
  const nav = useNavigate();
  const change = () => {
    nav("/shop");
  };
  return (
    <div>
      <div className="h-[90vh] flex flex-col md:flex-row items-center justify-evenly">
        <div className="flex flex-col text-center md:text-left px-4 md:px-0 items-center md:items-start mt-[-100px]">
          <h6 className="text-orangeprimary uppercase text-base md:text-lg tracking-wide leading-tight mb-3">
            Tawwer Academy
          </h6>
          <div className="text-3xl gap-3 flex flex-col md:text-5xl tracking-wide  font-title mb-4 leading-relaxed">
            <span className="md:text-7xl text-5xl font-bold text-primary ">
              Learn Anything,
            </span>

            <span className="font-bold text-orangeprimary">
              {" "}
              Anywhere Now !
            </span>
          </div>
          <p className="text-sm md:text-base tracking-wide leading-relaxed mb-4">
            A great place to buy clothes for all genders <br />
            and all sizes starting from 2$
          </p>
          <button
            onClick={change}
            className="bg-orangeprimary p-3  text-white w-[120px] md:w-[140px] h-12 mt-2 rounded-md flex items-center justify-center space-x-2 hover:bg-primary transition duration-300"
          >
            <span className="text-xl ">Lets go</span>
            <FaArrowRight className="text-white text-lg" />
          </button>
        </div>
        <div className="hidden md:block b h-[85vh] mt-[-100px] ">
          <img
            src={model}
            className={`w-fit h-[100%]  transition-opacity duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            alt="Fall - Winter Collection"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeText;
