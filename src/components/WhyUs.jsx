import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry experts with real-world experience.",
      icon: "🎓",
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to materials.",
      icon: "⏳",
    },
    {
      title: "Certifications",
      description: "Gain recognized certifications to boost your career.",
      icon: "🏆",
    },
  ];

  return (
    <div className="py-16  text-center text-gray-900">
      <motion.h2
        className="text-5xl font-extrabold mb-12 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Us?
      </motion.h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 bg-white text-gray-900 border-4 border-purple-500 hover:border-orange-500 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-6xl mb-4">{feature.icon}</span>
            <h3 className="text-3xl font-bold mb-4 text-orange-600">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
