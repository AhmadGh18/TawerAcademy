// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBars,
//   FaTimes,
//   FaEnvelope,
//   FaFacebook,
//   FaInstagram,
//   FaPhone,
//   FaYoutube,
//   FaUser,
//   FaStar,
// } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import manar from "../assets/manar.png";
// const Home2 = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-primary text-white  md:flex hidden flex-col md:flex-row items-center justify-between px-4 py-2 md:px-10">
//         <div className="flex flex-col md:flex-row md:items-center">
//           <div className="flex items-center gap-3 text-sm md:text-md p-2 md:border-r border-white">
//             <FaPhone />
//             <p>Call us: +961 81 763 000</p>
//           </div>
//           <div className="flex items-center gap-3 p-2 md:p-3">
//             <FaEnvelope />
//             <p>ahmad@me.com</p>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex gap-5 items-center mt-2 md:mt-0">
//           {[FaFacebook, FaInstagram, FaYoutube].map((Icon, index) => (
//             <div className="border-l border-white pl-5" key={index}>
//               <Icon />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-gray-100">
//         <div className="h-[80px] bg-gray-50 w-full md:rounded-tr-[60px] md:rounded-tl-[60px] flex items-center justify-between px-6 md:px-12">
//           {/* Logo */}
//           <img src={logo} alt="logo" className="h-[100px] md:h-[120px]" />

//           {/* Menu Button (Mobile) */}
//           <button
//             className="md:hidden text-primary text-3xl"
//             onClick={toggleMenu}
//           >
//             <FaBars />
//           </button>

//           {/* Navigation Links (Desktop) */}
//           <ul className="hidden md:flex gap-10 text-lg font-bold capitalize">
//             <li className="hover:text-primary cursor-pointer">Home</li>
//             <li className="hover:text-primary cursor-pointer">Courses</li>
//             <li className="hover:text-primary cursor-pointer">Programs</li>
//             <li className="hover:text-primary cursor-pointer">About Us</li>
//             <li className="hover:text-primary cursor-pointer">Instructors</li>
//           </ul>

//           {/* CTA Button (Desktop) */}
//           <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-md hover:opacity-75 transition-all">
//             Get Started
//           </button>
//         </div>
//         <motion.div
//           className="absolute bg-white shadow-black justify-center items-center shadow-md rounded-md h-[10vh] left-[50%] flex top-[55%] w-[13vw]"
//           animate={{ y: [0, -5, 0] }} // Moves up and down
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth infinite animation
//         >
//           <FaUser className="text-orangeprimary h-full w-1/5" />
//           <span className="font-bold"> 50+ Students</span>
//         </motion.div>

//         <div className="flex items-center justify-around">
//           <div>
//             <motion.p
//               className="text-7xl leading-[100px] capitalize font-semibold"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               Start your <span className="text-primary underline">journey</span>{" "}
//               <br />
//               to learn English <br /> from 0 to{" "}
//               <span className="text-orangeprimary">Hero</span>
//             </motion.p>

//             <div className="flex gap-6 items-center leading-relaxed">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//               >
//                 <p className="text-2xl my-3">4.95 Average Rating</p>
//                 <motion.div
//                   className="flex"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     duration: 1,
//                     delay: 0.4,
//                     ease: "easeOut",
//                   }}
//                 >
//                   {[1, 2, 3, 4, 5].map((el) => (
//                     <FaStar key={el} className="text-yellow-500 text-xl" />
//                   ))}
//                 </motion.div>
//                 <span>182 reviews</span>
//               </motion.div>
//               <motion.span
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//               >
//                 Start learning everything you need to know to be a better
//                 version of you
//               </motion.span>
//             </div>
//             <div className="gap-3 flex mt-3 leading-relaxed">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="p-3 bg-primary text-white"
//               >
//                 Explore Courses
//               </motion.button>

//               <button className="border-primary border-2 p-3">
//                 {" "}
//                 Contact us
//               </button>
//             </div>
//           </div>
//           <div className="bg-primary rounded-full  w-[500px] flex justify-center">
//             <motion.img
//               src={manar}
//               className="h-[80vh] z-99 object-contain"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Slide-in) */}
//       {isOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/50 z-40"
//             onClick={toggleMenu}
//           ></div>
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 100 }}
//             className="fixed top-0 right-0 w-[70%] sm:w-[50%] min-h-screen bg-white shadow-lg z-50 p-6 flex flex-col gap-6"
//           >
//             <button
//               className="text-primary text-3xl self-end"
//               onClick={toggleMenu}
//             >
//               <FaTimes />
//             </button>

//             <ul className="flex flex-col text-black font-bold text-lg gap-4 mt-4">
//               <li className="hover:text-primary cursor-pointer">Home</li>
//               <li className="hover:text-primary cursor-pointer">Courses</li>
//               <li className="hover:text-primary cursor-pointer">Programs</li>
//               <li className="hover:text-primary cursor-pointer">About Us</li>
//               <li className="hover:text-primary cursor-pointer">Instructors</li>
//             </ul>

//             <button className="bg-primary text-white px-5 py-2 rounded-md hover:opacity-75 transition-all mt-6">
//               Get Started
//             </button>
//           </motion.div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Home2;
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaYoutube,
  FaUser,
  FaStar,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import manar from "../assets/manar.png";

const Home2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-primary text-white md:flex hidden flex-col md:flex-row items-center justify-between px-4 py-2 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center gap-3 text-sm md:text-md p-2 md:border-r border-white">
            <FaPhone />
            <p>Call us: +961 81 763 000</p>
          </div>
          <div className="flex items-center gap-3 p-2 md:p-3">
            <FaEnvelope />
            <p>ahmad@me.com</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 items-center mt-2 md:mt-0">
          {[FaFacebook, FaInstagram, FaYoutube].map((Icon, index) => (
            <div className="border-l border-white pl-5" key={index}>
              <Icon />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="h-[80px] bg-gray-50 w-full md:rounded-tr-[60px] md:rounded-tl-[60px] flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-[100px] md:h-[120px]" />

          {/* Menu Button (Mobile) */}
          <button
            className="md:hidden text-primary text-3xl"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex gap-10 text-lg font-bold capitalize">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Courses</li>
            <li className="hover:text-primary cursor-pointer">Programs</li>
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Instructors</li>
          </ul>

          {/* CTA Button (Desktop) */}
          <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-md hover:opacity-75 transition-all">
            Get Started
          </button>
        </div>

        {/* 50+ Students Box Animation */}
        <motion.div
          className="absolute bg-white shadow-black justify-center items-center shadow-md rounded-md h-[10vh] left-[50%] flex top-[55%] w-[13vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FaUser className="text-orangeprimary h-full w-1/5" />
          <span className="font-bold">50+ Students</span>
        </motion.div>

        <div className="flex items-center justify-around">
          <div>
            {/* Main Text Animation */}
            <motion.p
              className="text-7xl leading-[100px] capitalize font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Start your <span className="text-primary underline">journey</span>{" "}
              <br /> to learn English <br /> from 0 to{" "}
              <span className="text-orangeprimary">Hero</span>
            </motion.p>

            <div className="flex gap-6 items-center leading-relaxed bg-  ">
              {/* Rating Section Animation */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                <p className="text-2xl my-3">4.95 Average Rating</p>
                <motion.div
                  className="flex"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((el) => (
                    <FaStar key={el} className="text-yellow-500 text-xl" />
                  ))}
                </motion.div>
                <span>182 reviews</span>
              </motion.div>

              {/* Description Text Animation */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                Start learning everything you <br /> need to know to be a better
                version of you
              </motion.span>
            </div>

            {/* Call-to-Action Buttons Animation */}
            <motion.div
              className="gap-3 flex mt-3 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              <button className="p-3 bg-primary text-white">
                Explore courses
              </button>
              <button className="border-primary border-2 p-3">
                Contact us
              </button>
            </motion.div>
          </div>

          {/* Image with Animation */}
          <motion.div
            className="bg-primary rounded-full w-[500px] flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <img src={manar} className="h-[80vh] z-99 object-contain" />
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in) */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-[70%] sm:w-[50%] h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6"
        >
          {/* Close Button */}
          <button
            className="text-primary text-3xl self-end"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>

          {/* Menu Links */}
          <ul className="flex flex-col text-black font-bold text-lg gap-4 mt-4">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Courses</li>
            <li className="hover:text-primary cursor-pointer">Programs</li>
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Instructors</li>
          </ul>

          {/* CTA Button */}
          <button className="bg-primary text-white px-5 py-2 rounded-md hover:opacity-75 transition-all mt-6">
            Get Started
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Home2;
