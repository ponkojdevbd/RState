import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto p-6 md:px-10 lg:px-16 xl:px-32 w-full"
      id="Testimonials"
    >
      {/* Section Heading */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Customer
          <span className="underline underline-offset-4 decoration-1 font-light ml-2">
            Testimonials
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Real Stories from Those Who Found home with Us
        </p>
      </div>

      {/* Testimonials contents */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8  ">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className=" border border-gray-300 shadow-lg rounded px-8 py-12 text-center group "
          >
            <div className="group-hover:scale-102">
              <img
                className=" w-20 h-20 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.alt}
              />
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <div className="flex justify-center gap-1 mb-4 text-red-500 ">
                {Array.from({ length: testimonial.rating }, (item, index) => (
                  <img key={index} src={assets.star_icon} alt="Rating" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
