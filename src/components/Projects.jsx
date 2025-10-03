import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto p-6 md:px-10 lg:px-16 xl:px-32 w-full"
      id="Projects"
    >
      {/* Section Heading */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Projects
          <span className="underline underline-offset-4 decoration-1 font-light ml-2">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Crafting Spaces, Building Legacies – Explore Our Portfolio
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        loop={true}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 2 }, // sm
          1024: { slidesPerView: 3 }, // lg
          1280: { slidesPerView: 3 }, // xl
        }}
        className="w-full"
      >
        {projectsData.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative bg-white rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-lg "
              />
              <div className="flex flex-col items-center justify-center flex-1 px-4 py-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {project.price}
                  <span className="px-1">{project.location}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center mt-6 w-full">
        <button className="prev-btn p-3 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition">
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </button>
        <button className="next-btn p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
