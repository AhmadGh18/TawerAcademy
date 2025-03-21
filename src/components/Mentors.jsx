import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import model from "../assets/manar.png";
import abed from "../assets/abed.png";
import osma from "../assets/osama.png";

const mentors = [
  { name: "Harriet Graham", role: "Instructor", image: abed },
  { name: "Ernest Dustin", role: "Instructor", image: osma },
  { name: "Dana Wh", role: "Instructor", image: model },
  { name: "Dana Wh", role: "Instructor", image: model },
];

const Mentors = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-10">
        Meet Our Mentors
      </h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet2",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="w-full max-w-6xl px-4 mySwiper "
      >
        {mentors.map((mentor, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-[55vh] w-full transition-transform duration-200 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                draggable={false}
                className="w-full h-72 object-contain bg-orangeprimary"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2  px-5 py-2 rounded-lg text-center ">
                <h3 className="text-xl font-bold text-gray-900">
                  {mentor.name}
                </h3>
                <p className="text-orange-600 font-medium">{mentor.role}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mentors;
