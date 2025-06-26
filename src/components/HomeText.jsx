import React, { useEffect, useState } from "react";
import model from "../assets/manar.png";
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
        <div className="bg-red-200 flex flex-col max-w-[40%] leading-relaxed gap-3">
          <h1>Welcome to Tawr Academy</h1>
          <p>
            Live English courses designed for Arabic speakers — tailored to your
            time, level, and goals. Interactive approach, flexible structure,
            and top-quality learning.
          </p>
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
