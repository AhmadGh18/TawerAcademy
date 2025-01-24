import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Clients", number: 120 },
  { label: "Projects", number: 250 },
  { label: "Years of Experience", number: 10 },
  { label: "Countries", number: 15 },
];

const AboutUs = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  // Function to handle the counting animation
  const countUp = (target, index) => {
    let count = 0;
    const step = Math.ceil(target / 100);
    const animate = () => {
      count += step;
      if (count >= target) {
        count = target;
      }
      setAnimatedNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        newNumbers[index] = count;
        return newNumbers;
      });

      if (count < target) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          stats.forEach((stat, index) => {
            countUp(stat.number, index);
          });
          setHasAnimated(true); // Ensures animation happens only once
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("about-us-stats");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id="about-us-stats"
      className="min-h-[70vh] flex items-center py-12 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700 text-white mt-3"
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-3xl font-extrabold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get to Know Us Better
        </motion.h2>
        <p className="text-lg text-white mb-12">
          We have been providing outstanding services across multiple
          industries. Here's a look at our achievements:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex-1 min-w-[250px] max-w-[300px] bg-white p-6 rounded-lg shadow-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className="text-4xl font-extrabold text-purple-600 mb-4">
                {animatedNumbers[index]}
              </div>
              <p className="text-gray-800 text-xl font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
