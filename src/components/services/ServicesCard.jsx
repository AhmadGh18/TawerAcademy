import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, description, detailedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded((value) => !value);
  };

  return (
    <motion.div
      className="bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl text-purple-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {isExpanded && <p>{detailedDescription}</p>}
      <button
        onClick={handleExpand}
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
      >
        {isExpanded ? "See Less" : "Load More"}
      </button>
    </motion.div>
  );
};

export default ServiceCard;
