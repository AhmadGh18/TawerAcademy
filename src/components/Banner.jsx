import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import manar from "../assets/manar.png";
const LandingPage = () => {
  return (
    <div dir="" className="min-h-screen  px-6 py-8 !font-body  ">
      <div className="max-w-7xl mx-auto grid font-body md:grid-cols-2 gap-32 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6A0DAD] leading-tight">
            🌟 Welcome to Tawr Academy
          </h1>
          <p className="text-[#5E6871] text-lg font-body">
            Learn English with confidence through our live, interactive courses
            built specifically for Arabic speakers. Whether you're a beginner or
            advanced, we tailor the journey to your goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#5E6871]">
            <div>
              <h3 className="font-semibold text-[#6A0DAD]">
                👨‍🏫 Expert Instructors
              </h3>
              <p>Live sessions with experienced and certified teachers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#6A0DAD]">
                📅 Flexible Schedules
              </h3>
              <p>Choose timings that suit your lifestyle and commitments.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#6A0DAD]">
                📈 Level-Based Learning
              </h3>
              <p>Placement tests to start at the right level.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#6A0DAD]">
                💬 Arabic Support
              </h3>
              <p>Clear explanations in Arabic to make your journey smooth.</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white text-lg px-6 py-3 rounded-xl flex items-center gap-2 mx-auto md:mx-0"
          >
            <FaWhatsapp /> Contact us on WhatsApp
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center bg-primary rounded-full h-[80vh] w-[40vw] mt-2">
          <img
            src={manar}
            alt="Instructor"
            className="w-80 h rounded-2xl object-cover "
          />
        </div>
      </div>

      {/* Extra Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#6A0DAD] mb-4">
          Your Journey Starts Here
        </h2>
        <p className="text-[#5E6871] text-lg">
          We don’t offer one-size-fits-all courses. Instead, we work with you to
          create a plan that aligns with your current level and target. Whether
          it's for study, work, or travel — we’ve got the right path for you.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
