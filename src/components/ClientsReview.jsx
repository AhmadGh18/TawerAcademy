// import React from "react";

// const ClientsReview = () => {
//   const reviews = [
//     {
//       name: "Kenzie Edgar",
//       img: "https://i.pravatar.cc/100?img=1",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel!",
//     },
//     {
//       name: "Stevie Tifft",
//       img: "https://i.pravatar.cc/100?img=2",
//       review:
//         "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
//     },
//     {
//       name: "Tommie Ewart",
//       img: "https://i.pravatar.cc/100?img=3",
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
//     },
//     {
//       name: "Charlie Howse",
//       img: "https://i.pravatar.cc/100?img=4",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt.",
//     },
//     {
//       name: "Nevada Herbertson",
//       img: "https://i.pravatar.cc/100?img=5",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt.",
//     },
//     {
//       name: "Kris Stanton",
//       img: "https://i.pravatar.cc/100?img=6",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
//     },
//   ];

//   return (
//     <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-10">
//       <div className="w-full bg-white md:px-5 px-2 py-16 text-gray-800">
//         <div className="w-full max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center max-w-xl mx-auto mb-10">
//             <h1 className="text-5xl md:text-6xl font-bold mb-5 text-gray-600">
//               What People Are Saying
//             </h1>
//             <h3 className="text-xl mb-5 text-gray-500">
//               Hear from our satisfied clients and their amazing experiences.
//             </h3>
//           </div>

//           {/* Reviews Marquee */}
//           <div className="overflow-hidden relative py-5">
//             <div className="flex space-x-6 animate-scroll">
//               {reviews.concat(reviews).map((review, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-80 md:w-96  bg-white border-2   p-6 text-gray-800 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
//                       <img src={review.img} alt={review.name} />
//                     </div>
//                     <div className="ml-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         {review.name}
//                       </h6>
//                     </div>
//                   </div>
//                   <p className="text-sm leading-tight italic">
//                     <span className="text-lg font-bold text-gray-400 mr-1">
//                       "
//                     </span>
//                     {review.review}
//                     <span className="text-lg font-bold text-gray-400 ml-1">
//                       "
//                     </span>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Marquee Animation */}
//       <style>{`
//         .animate-scroll {
//           display: flex;
//           animation: scroll 12s linear infinite;
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }

//         @media screen and (max-width: 800px) {
//           .animate-scroll {
//             animation: scroll 6s linear infinite;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClientsReview;
import React from "react";
import { FaStar } from "react-icons/fa"; // Using react-icons for the star icon
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper's styles
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/navigation";
const ClientsReview = () => {
  return (
    <div className="z-0  ">
      <section className="py-10 !z-0" style={{ zIndex: "0" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-0">
          <div className="mb-16">
            <span className="text-sm text-gray-500 font-medium text-center block mb-2 z-0">
              TESTIMONIAL
            </span>
            <h2 className="text-4xl text-center font-bold text-gray-900 z-0">
              What our happy users say!
            </h2>
          </div>

          <Swiper
            className="mySwiper relative  h-[45vh]"
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            pagination={{
              clickable: true,

              bulletClass: "swiper-pagination-bullet",
              // el: ".swiper-pagination",

              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="group z-0 bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500 z-0">
                      <FaStar className="w-5 h-5 z-0" />
                      <span className="text-base font-semibold text-indigo-600 z-0">
                        4.9
                      </span>
                    </div>
                    <p className="text- z-0 text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Pagedone has made it possible for me to stay on top of my
                      portfolio and make informed decisions quickly and easily.
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5 z-0">
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src="https://pagedone.io/asset/uploads/1696229969.png"
                      alt="avatar"
                    />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                        Jane D
                      </h5>
                      <span className="text-sm leading-4 text-gray-500">
                        CEO
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ClientsReview;
