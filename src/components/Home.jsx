import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard
            title="Expert Instructors"
            desc="Learn from industry leaders and professionals."
          />
          <FeatureCard
            title="Flexible Learning"
            desc="Access courses anytime, anywhere."
          />
          <FeatureCard
            title="Certified Courses"
            desc="Earn certificates to boost your career."
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 shadow-md rounded-lg w-64"
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </motion.div>
);

const CourseCard = ({ title, rating }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 shadow-md rounded-lg w-64 text-left"
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="flex items-center text-yellow-500">
      <FaStar className="mr-2" /> {rating} / 5
    </p>
  </motion.div>
);

export default HomePage;
