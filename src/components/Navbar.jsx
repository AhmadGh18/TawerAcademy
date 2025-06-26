import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import inst from "../assets/instagram-logo-gradient-transparent.png";
import { useStateContext } from "./context/Contextprovider";
import ar from "../lang/arabic.json";
import en from "../lang/arabic.json";
import Switch from "./Switch";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { isArb } = useStateContext();

  const data = isArb ? ar : en;
  return (
    <div
      className={` navbar md:mt-4    flex flex-col shadow-md z-100  md:flex-row md:justify-between md:px-[108px] px-8 items-center h-24  font-title font-extralight 
     t  -colors z-10000`}
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <img className="h-[120px]" src={logo} alt="Tawer" draggable={false} />
        <div className=" md:hidden flex items-center gap-3  ">
          <Switch />
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <ul
        style={{ zIndex: "222" }}
        className={`md:flex h-[90%] bg-white md:items-center md:gap-8 text-lg font-semibold z-100 transition-all duration-300 ${
          isOpen
            ? "flex flex-col items-center w-full absolute top-20 left-0 md:static md:bg-white shadow-lg text-black z-100"
            : "opacity-0 translate-y-[-10px] md:opacity-100 md:translate-y-0 md:static  text-black transition-none z-1000 "
        }`}
      >
        <li>
          <a
            target="_blank"
            href="https://youtube.com/@taweracademy?si=Ua2owEZaDnDoQsNG"
            className={`flex justify-center items-center gap-2 px-2 py-1  hover:text-primary ${
              isOpen ? "mt-10" : ""
            }`}
          >
            <FaYoutube className="text-2xl text-red-500" />
            <p className="md:hidden block ">Youtube</p>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/taweracademy?igsh=amd1ejBlNWw1Mmx1"
            className={`flex justify-center items-center gap-2 px-2 py-1  hover:text-primary ${
              isOpen ? "mt-10" : ""
            }`}
          >
            <img src={inst} className="h-6" />
            <p className="md:hidden block ">Instagram</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/share/1HLNaZ2Asy/?mibextid=wwXIfr"
            className={`flex justify-center items-center gap-2 px-2 py-1  hover:text-primary ${
              isOpen ? "mt-10" : ""
            }`}
          >
            <FaFacebook className="text-blue-500 text-2xl" />
            <p className="md:hidden block ">Facebook</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.tiktok.com/@tawer.academy?_t=ZS-8xWlo9Kx7JK&_r=1"
            className={`flex justify-center items-center gap-2 px-2 py-1  hover:text-primary ${
              isOpen ? "mt-10" : ""
            }`}
          >
            <FaTiktok className="text-2xl text-left" />
            <p className="md:hidden block ">tiktok</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=%2B96181866049"
            className="overflow-hidden flex justify-center items-center mt-7 mb-3 md:mt-0 md:mb-0 relative w-32 p-2 h-12 bg-green-500 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          >
            <FaWhatsapp />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute t  z-10">
              {data.homePage.ContactButton}
            </span>
          </a>
        </li>
        <li className="hidden md:block">
          <Switch />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
