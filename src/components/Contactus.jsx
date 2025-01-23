import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
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
    <div className="mt-2 max-w-6xl max-lg:max-w-3xl mx-auto bg-gradient-to-br from-primary to-pink-500 md:rounded-lg shadow-lg animate-fadeIn">
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 ">
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
              onChange={(e) => setName(e.target.value)}
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
              onClick={sendEmail}
              type="submit"
              className="px-8 z-30 py-4 bg-primary rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-orangeprimary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 gap-2  text-xl w-full h-12 flex items-center justify-center"
            >
              <span> Send Message</span> <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
