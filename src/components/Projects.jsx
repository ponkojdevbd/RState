import React, { useEffect, useState, useRef } from "react";
import { assets, projectsData } from "../assets/assets";

const TRANSITION_DURATION = 400; // ms

const Projects = () => {
  const [cardToShow, setCardToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [resetting, setResetting] = useState(false);
  const containerRef = useRef(null);

  // Responsive cards per view using matchMedia (lighter than resize listener)
  useEffect(() => {
    const updateCardToShow = () => {
      if (window.matchMedia("(min-width:1280px)").matches)
        return setCardToShow(4);
      if (window.matchMedia("(min-width:1024px)").matches)
        return setCardToShow(3);
      if (window.matchMedia("(min-width:640px)").matches)
        return setCardToShow(2);
      setCardToShow(1);
    };

    updateCardToShow();
    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  // Build visible projects window
  const getWindowProjects = () => {
    const total = projectsData.length;
    const prevIdx = (currentIndex - 1 + total) % total;
    const nextIdx = (currentIndex + cardToShow) % total;
    return [
      projectsData[prevIdx],
      ...Array.from(
        { length: cardToShow },
        (_, i) => projectsData[(currentIndex + i) % total]
      ),
      projectsData[nextIdx],
    ];
  };

  // Handle sliding animation
  const handleSlide = (dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setResetting(true);
      setCurrentIndex((prev) =>
        dir === "next"
          ? (prev + 1) % projectsData.length
          : (prev - 1 + projectsData.length) % projectsData.length
      );

      setTimeout(() => {
        setIsAnimating(false);
        setResetting(false);
      }, 20);
    }, TRANSITION_DURATION);
  };

  // Translate percentage
  const slidePercent = 100 / (cardToShow + 1);
  let transformStyle = `translateX(-${slidePercent}%)`;
  if (isAnimating && direction === "next")
    transformStyle = `translateX(-${2 * slidePercent}%)`;
  if (isAnimating && direction === "prev") transformStyle = `translateX(0%)`;

  const transitionStyle = resetting
    ? "none"
    : `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`;

  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto p-6 md:px-10 lg:px-16 xl:px-32 w-full overflow-hidden"
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

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8 w-full">
        <button
          onClick={() => handleSlide("prev")}
          className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition"
          disabled={isAnimating}
        >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleSlide("next")}
          className="p-3 bg-gray-200 rounded hover:bg-gray-300 transition"
          disabled={isAnimating}
        >
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>

      {/* Project Cards */}
      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 justify-center"
          style={{
            width: `${((cardToShow + 2) * 100) / cardToShow}%`,
            transition: transitionStyle,
            transform: transformStyle,
          }}
        >
          {getWindowProjects().map((project, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 bg-white rounded-lg shadow-md flex flex-col 
                         transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg 
                         w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
              style={{ height: "420px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="flex flex-col items-center justify-center flex-1 px-4 py-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 text-center">
                  {project.price} <span>{project.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
