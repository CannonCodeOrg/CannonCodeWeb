import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [0, 1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const slideLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const getSliderStyle = () => {
    const percentage = -(100 * currentIndex);
    return {
      transform: `translateX(${percentage}%)`,
      transition: "transform 0.5s ease-in-out",
    };
  };

  return (
    <div className="min-h-[80vh]">
      <div className="font-bold text-4xl py-[3em] text-center mt-[20vh]">Projects</div>

      <div className="w-full relative overflow-hidden">
        <div className="slider-wrapper flex" style={getSliderStyle()}>
          {projects.map((project, index) => (
            // PROJECT CARD WRAPPER
            <div key={index} className="slider-item p-4">
              <ProjectCard />
            </div>
          ))}
        </div>

        {/* SLIDE BUTTONS */}
        <button className="left-slide-button" onClick={slideLeft}>
          {"<"}
        </button>
        <button className="right-slide-button" onClick={slideRight}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
