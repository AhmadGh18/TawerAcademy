import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import manar from "../assets/manar.png";
const LandingPage = () => {
  return (
    <div
      dir=""
      className="md:h-[80vh] max-h-[90vh]  px-6 py-3 !font-body  flex items-center "
    >
      <div className="max-w-7xl mx-auto grid font-body md:grid-cols-2 gap-32 items-center">
        {/* Text Section */}
        <div className="md:space-y-6 space-y-2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#6A0DAD] leading-tight">
            Welcome to Tawr Academy
          </h1>
          <p className="text-[#5E6871] text-md font-body">
            Learn English with confidence through our live, interactive courses
            built specifically for Arabic speakers. Whether you're a beginner or
            advanced, we tailor the journey to your goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#5E6871]">
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                👨‍🏫 Expert Instructors
              </h3>
              <p className="md:text-md text-sm">
                Live sessions with experienced and certified teachers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                📅 Flexible Schedules
              </h3>
              <p className="md:text-md text-sm">
                Choose timings that suit your lifestyle and commitments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                📈 Level-Based Learning
              </h3>
              <p className="md:text-md text-sm">
                Placement tests to start at the right level.
              </p>
            </div>
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                💬 Arabic Support
              </h3>
              <p className="md:text-md text-sm">
                Clear explanations in Arabic to make your journey smooth.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white text-lg px-6 py-3 rounded-xl flex items-center gap-2 mx-auto md:mx-0"
          >
            <FaWhatsapp /> Contact us
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="md:flex justify-center hidden  bg-primary rounded-full h-[80vh] w-[40vw] mt-2">
          <img
            src={manar}
            alt="Instructor"
            className="w-80 h rounded-2xl object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
