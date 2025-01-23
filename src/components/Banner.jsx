import React from "react";
import { motion } from "framer-motion";
import img from "../assets/1200px-What_type_of_person_are_you_quiz_pic-removebg-preview.png";

const Banner = () => {
  return (
    <div className="relative  flex items-center justify-center bg-gray-100">
      <div className="h-[85vh] w-full flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="h-full w-full md:w-1/2 flex items-center px-6 md:px-12 text-gray-800">
          <div className="space-y-6">
            {/* Text Content */}
            <motion.p
              className="text-xl md:text-2xl font-semibold text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              More Than 26,000+ Courses From Us
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight capitalize text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Learn English <br /> anywhere, anytime, now!
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Done by professional English instructors with 24+ degrees <br />
              and 37 years of experience.
            </motion.p>
          </div>
        </div>

        {/* Centered Primary Div */}
        <motion.div
          className="bg-primary w-full md:w-1/2 h-[40vh] md:h-full flex items-center justify-center shadow-lg relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.img
            src={img}
            alt="Banner"
            className="w-[80%] h-[80%] object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.div>
      </div>

      {/* Floating SVGs */}
      {/* SVG on Top-Left */}
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 27 23"
        className="absolute top-5 left-5 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <path
          d="M1.86862 21.5063L13.127 2.00635L24.3853 21.5063H1.86862Z"
          stroke="#592ADF"
          strokeWidth="2"
        />
      </motion.svg>

      {/* SVG at Bottom-Left */}
      <motion.svg
        width="27"
        height="23"
        viewBox="0 0 27 23"
        className="absolute bottom-10 left-[10%] animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <path
          d="M1.86862 21.5063L13.127 2.00635L24.3853 21.5063H1.86862Z"
          stroke="#592ADF"
          strokeWidth="2"
        />
      </motion.svg>

      {/* SVG at Middle-Left */}
      <motion.svg
        width="30"
        height="28"
        viewBox="0 0 26 22"
        className="absolute top-[60%] left-[30%] animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <circle
          cx="7"
          cy="7"
          r="7"
          transform="matrix(-1 0 0 1 26 8)"
          fill="#088BE3"
        />
        <circle
          cx="4"
          cy="4"
          r="4"
          transform="matrix(-1 0 0 1 8 0)"
          fill="#088BE3"
        />
      </motion.svg>
    </div>
  );
};

export default Banner;
