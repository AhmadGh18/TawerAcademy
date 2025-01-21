import React from "react";
import ServicesCard from "./ServicesCard";
import services from "../../data/services";
import { motion } from "framer-motion";

const ServicesPage = () => {
  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of children
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700 text-white"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg mt-2 font-medium"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Explore the wide range of programs we offer to boost your skills!
        </motion.p>
      </header>
      <motion.div
        className="container mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={cardVariants}>
            <ServicesCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
