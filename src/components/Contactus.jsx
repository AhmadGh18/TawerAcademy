import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  // Email.js Configurations
  const emailServiceId = "service_3y77lcu";
  const emailTemplateId = "template_di25com";
  const emailPublicKey = "amDIkmdHOCdQukrOT";

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setError("Please fill out all fields.");
      return;
    }

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        { from_name: name, from_email: email, from_subject: subject, message },
        emailPublicKey
      )
      .then(() => {
        setSuccess("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setError("");
        setTimeout(() => {
          setSuccess("");
        }, 4000);
      })
      .catch(() => {
        setError("Failed to send your message. Please try again later.");
      });
  };

  return (
    // <div className="grid sm:grid-cols-2 gap-8 p-6 mx-auto max-w-5xl   rounded-lg">
    //   {/* Left Section */}
    //   <div>
    //     <h1 className="text-orangeprimary text-3xl font-bold">Let's Talk 👀</h1>
    //     <p className="text-gray-500 mt-4">
    //       Have an Question? Lets start descusing about how we can help you
    //     </p>

    //     {/* Contact Details */}
    //     <div className="mt-10">
    //       <h2 className="text-gray-800 text-lg font-semibold">Email</h2>
    //       <div className="flex items-center mt-4">
    //         <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
    //           <MdEmail className="text-orangeprimary text-lg" />
    //         </div>
    //         <a href="mailto:info@example.com" className="ml-4 text-gray-800">
    //           <strong>Taweracademy@gmail.com</strong>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Social Media */}
    //     <div className="mt-10">
    //       <h2 className="text-gray-800 text-lg font-semibold">Socials</h2>
    //       <ul className="flex space-x-4 mt-4">
    //         <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
    //           <a href="https://wa.me/96181866049" target="_blank">
    //             <FaWhatsapp className="text-orangeprimary" />
    //           </a>
    //         </li>
    //         <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
    //           <a href="#" target="_blank">
    //             <FaYoutube className="text-orangeprimary" />
    //           </a>
    //         </li>
    //         <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
    //           <a
    //             href="https://www.instagram.com/taweracademy?igsh=MWYwMWwyYnQ5NXV4cg=="
    //             target="_blank"
    //           >
    //             <FaInstagram className="text-orangeprimary" />
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Right Section */}
    //   <form
    //     ref={form}
    //     className="space-y-4 md:bg-white md:p-6 rounded-lg md:shadow-md "
    //     onSubmit={sendEmail}
    //   >
    //     <h2 className="text-gray-800 text-2xl font-semibold">Send a Message</h2>

    //     {/* Inputs */}
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       className="w-full rounded-md py-3 px-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
    //     />
    //     <input
    //       type="email"
    //       placeholder="Your Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full rounded-md py-3 px-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Subject"
    //       value={subject}
    //       onChange={(e) => setSubject(e.target.value)}
    //       className="w-full rounded-md py-3 px-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
    //     />
    //     <textarea
    //       placeholder="Message"
    //       rows="6"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       className="w-full rounded-md px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
    //     ></textarea>

    //     {/* Error and Success Messages */}
    //     {error && <p className="text-red-500 text-sm">{error}</p>}
    //     {success && <p className="text-green-500 text-sm">{success}</p>}

    //     {/* Submit Button */}
    //     <button
    //       type="submit"
    //       className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
    //     >
    //       Send
    //     </button>
    //   </form>
    // </div>
    <div className="mt-2 max-w-6xl max-lg:max-w-3xl mx-auto bg-gradient-to-br from-primary to-pink-500 md:rounded-lg shadow-lg animate-fadeIn">
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
        <div>
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-sm text-gray-200 mt-4 leading-relaxed">
            Have some big idea or brand to develop and need help? Then reach
            out, we'd love to hear about your project and provide help.
          </p>

          <ul className="mt-12 space-y-8">
            <li className="flex items-center transition-all hover:scale-105">
              <FaRegEnvelope className="text-white text-xl" />
              <a
                href="mailto:Taweracademy@gmail.com"
                className="text-white text-sm ml-4"
              >
                Taweracademy@gmail.com
              </a>
            </li>
            <li className="flex items-center transition-all hover:scale-105">
              <FaPhoneAlt className="text-white text-xl" />
              <a
                href="https://wa.me/96181866049"
                className="text-white text-sm ml-4"
              >
                +961 81866049
              </a>
            </li>
            <li className="flex items-center transition-all hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 368.16 368.16"
              >
                <path d="..." />
              </svg>
              <a href="javascript:void(0)" className="text-white text-sm ml-4">
                123 Street 256 House
              </a>
            </li>
          </ul>

          <ul className="flex mt-12 space-x-4">
            <li className="outline outline-white h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110">
              <a href="https://youtube.com">
                <FaYoutube className="text-white text-xl" />
              </a>
            </li>
            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 outline outline-white transition-all hover:scale-110">
              <a href="https://whatsapp.com">
                <FaWhatsapp className="text-white text-xl" />
              </a>
            </li>
            <li className="outline outline-white h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110">
              <a href="https://instagram.com">
                <FaInstagram className="text-white text-xl" />
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate__animated animate__fadeInRight">
          <div>
            <p className="text-xl font-semibold">Leave a message</p>
            <p className="text-red-500">{error && error}</p>
            <p className="text-green-400">{success && success}</p>
          </div>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none border border-gray-300 focus:border-primary focus:ring-primary"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none border border-gray-300 focus:border-primary focus:ring-primary"
            />
            <input
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none border border-gray-300 focus:border-primary focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-none border border-gray-300 focus:border-primary focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              onClick={sendEmail}
              className="text-white bg-primary hover:bg-pink-700 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6 transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path d="..." />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

//   return (

//     <div className="w-full contactus">
//       <form ref={form} onSubmit={sendEmail} className="w-full">
//         <div className="w-full flex flex-col lg:flex-row items-center justify-center h-full gap-10 ">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left p-4 contactleft">
//             <h1 className="text-4xl lg:text-5xl  tracking-wider mb-4">
//               Let's chat. <br />
//               Tell me about <span className="text-primary">
//                 your
//               </span> <br /> project
//             </h1>
//             <h6 className="text-wheat mt-4 text-base">
//               Let's chat something together
//             </h6>
//             <p className="mt-4 text-wheat flex items-center justify-center lg:justify-start">
//               Mail me at ahmad.ghzayel.me@gmail.com <MdEmail className="ml-2" />
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-2/5 flex flex-col p-4 contactright">
//             <h1 className="text-3x  mb-4 tracking-wide">
//               Send us a message 🚀
//             </h1>
//             <input
//               className="mt-2 rounded-md px-4 py-3 text-base border border-gray-300"
//               placeholder="Full name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               className="mt-2 rounded-md px-4 py-3 text-base border border-gray-300"
//               placeholder="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               className="mt-2 rounded-md px-4 py-3 text-base border border-gray-300 focus:outline-primary outline-5 "
//               placeholder="Subject"
//               type="text"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />
//             <p className="text-white mt-4">Tell me how I can help you</p>
//             <textarea
//               className="mt-2 rounded-md px-4 py-3 text-base border border-gray-300 resize-none"
//               rows={7}
//               value={message}
//               cols={30}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Explain your issue"
//               name="message"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="mt-4 h-12 w-28 rounded-md bg-primary transition-all text-white"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
