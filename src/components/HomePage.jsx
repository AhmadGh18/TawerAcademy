import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
        <h1 className="text-5xl font-bold mb-4">
          Empower Your Learning Journey
        </h1>
        <p className="text-lg mb-6">
          Explore high-quality courses from top instructors worldwide.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get Started
        </button>
      </section>

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

      {/* Popular Courses */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Popular Courses</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <CourseCard title="Web Development" rating={4.8} />
          <CourseCard title="Graphic Design" rating={4.6} />
          <CourseCard title="Data Science" rating={4.9} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 E-Learn. All rights reserved.</p>
      </footer>
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
