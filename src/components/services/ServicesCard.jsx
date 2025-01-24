import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, description, detailedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Animation logic for scroll
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the card is visible
    triggerOnce: true, // Only trigger animation once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleExpand = () => {
    setIsExpanded((value) => !value);
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg p-6"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {isExpanded && <p>{detailedDescription}</p>}
      <button
        onClick={handleExpand}
        className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-purple-600 transition"
      >
        {isExpanded ? "See Less" : "Load More"}
      </button>
    </motion.div>
  );
};

export default ServiceCard;
