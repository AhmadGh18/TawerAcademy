import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import manar from "../assets/manar.png";
import { useStateContext } from "../components/context/Contextprovider"; // adjust path if needed
import ar from "../lang/arabic.json";
import en from "../lang/english.json";

const LandingPage = () => {
  const { isArb } = useStateContext();
  const data = isArb ? ar : en;

  return (
    <div
      dir={isArb ? "rtl" : "ltr"}
      className={`md:h-[80vh] max-h-[90vh]  px-6 py-3 ${
        isArb ? "font-arb" : "font-body"
      }  flex items-center `}
    >
      <div className="max-w-7xl mx-auto grid  md:grid-cols-2 gap-32 items-center">
        {/* Text Section */}
        <div
          className={`md:space-y-6 space-y-2 text-center ${
            isArb ? "md:text-right" : "md:text-left"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#6A0DAD] leading-tight">
            {data.homePage.title}
          </h1>
          <p className="text-[#5E6871] text-md font-body">{data.homePage.s}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#5E6871]">
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                {data.homePage.features.instructor.title}
              </h3>
              <p className="md:text-md text-sm">
                {data.homePage.features.instructor.desc}
              </p>
            </div>
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                {data.homePage.features.schedule.title}
              </h3>
              <p className="md:text-md text-sm">
                {data.homePage.features.schedule.desc}
              </p>
            </div>
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                {data.homePage.features.level.title}
              </h3>
              <p className="md:text-md text-sm">
                {data.homePage.features.level.desc}
              </p>
            </div>
            <div>
              <h3 className="font-semibold md:text-md text-sm text-[#6A0DAD]">
                {data.homePage.features.support.title}
              </h3>
              <p className="md:text-md text-sm">
                {data.homePage.features.support.desc}
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://api.whatsapp.com/send?phone=%2B96181866049"
            target="_blank"
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 w-fit text-white text-lg px-6 py-3 rounded-xl flex items-center gap-2 mx-auto md:mx-0"
          >
            <FaWhatsapp /> {data.homePage.ContactButton}
          </motion.a>
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
