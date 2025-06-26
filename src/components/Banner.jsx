import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import manar from "../assets/manar.png";
import { useStateContext } from "../components/context/Contextprovider";
import ar from "../lang/arabic.json";
import en from "../lang/english.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.4 },
  }),
};

const LandingPage = () => {
  const { isArb } = useStateContext();
  const data = isArb ? ar : en;

  const features = [
    data.homePage.features.instructor,
    data.homePage.features.schedule,
    data.homePage.features.level,
    data.homePage.features.support,
  ];

  return (
    <div
      dir={isArb ? "rtl" : "ltr"}
      className={`md:h-[80vh] max-h-[90vh] h-[80vh] px-6 py-3 ${
        isArb ? "font-arb" : "font-body"
      } flex items-center md:flex-row`}
    >
      <div className="max-w-7xl mx-auto grid md:h-full md:flex text-center justify-center md:space-y-6 md:grid-cols-2 gap-32 items-center">
        {/* Text Section */}
        <div
          className={`lg:space-y-6 md:space-y-12 space-y-4 text-center ${
            isArb ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            {data.homePage.title}
          </h1>
          <p className="text-[#5E6871] text-md font-body">{data.homePage.s}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#5E6871]">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <h3 className="font-semibold md:text-md text-sm text-primary">
                  {feature.title}
                </h3>
                <p className="md:text-md text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://api.whatsapp.com/send?phone=%2B96181866049"
            target="_blank"
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 w-fit md:mx-auto text-white text-lg px-6 py-3 rounded-xl flex items-center gap-2 mx-auto lg:mx-0"
          >
            <FaWhatsapp /> {data.homePage.ContactButton}
          </motion.a>
        </div>

        {/* Image Section */}
        <div className="lg:flex justify-center hidden bg-primary rounded-full h-[80vh] w-[40vw] mt-2">
          <img
            src={manar}
            alt="Instructor"
            className="w-80 rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
