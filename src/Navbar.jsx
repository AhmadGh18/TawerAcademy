import React, { useState } from "react";
import logo from "./assets/WhatsApp_Image_2025-01-17_at_9.15.23_PM-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const nav = useNavigate();
  return (
    <div
      className={`z-100 navbar md:mt-4  flex flex-col shadow-md  md:flex-row justify-around items-center h-24 px-8 font-title font-extralight 
     transition-colors`}
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <img className="h-[120px]" src={logo} alt="Tawer" draggable={false} />
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`md:flex h-[90%] bg-white md:items-center md:gap-8 text-lg font-semibold transition-all duration-300 ${
          isOpen
            ? "flex flex-col items-center w-full absolute top-20 left-0 md:static md:bg-white shadow-lg text-black"
            : "opacity-0 translate-y-[-10px] md:opacity-100 md:translate-y-0 md:static  text-black transition-none"
        }`}
      >
        <li>
          <Link
            to="/"
            className={`block px-2 py-1 hover:text-TextHover ${
              isOpen ? "mt-10" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`block px-2 py-1 hover:text-TextHover ${
              isOpen ? "mt-10" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`block px-2 py-1 hover:text-TextHover ${
              isOpen ? "mt-10" : ""
            }`}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            className={`block px-2 py-1 hover:text-TextHover ${
              isOpen ? "mt-10" : ""
            }`}
          >
            Our story
          </Link>
        </li>
        <li>
          <a
            href="#contact"
            className={`block px-2 py-1 hover:text-TextHover ${
              isOpen ? "mt-10" : ""
            }`}
          >
            Contact us
          </a>
        </li>
        <li>
          <button className="overflow-hidden mt-7 mb-3 md:mt-0 md:mb-0 relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Explore
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-TextHover rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
