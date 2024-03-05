import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "SMART SPOTLIGHT",
      description:
        "🎇 Integrative real-time person detection and spotlight direction.",
      techs: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Arduino",
        "Robotics",
        "Machine Learning",
        "Computer Vision",
      ],
    },
    {
      id: 1,
      title: "OUR PORTFOLIO",
      description: "💼 Portfolio website of our organization.",
      techs: ["JavaScript", "ReactJS", "Tailwind", "CSS"],
    },
    {
      id: 2,
      title: "DEPARTURES",
      description:
        "🚌 Application that shows the nearest arrival times of buses and trams from nearby stops.",
      techs: ["JavaScript", "ReactJS", "Tailwind", "CSS"],
    },
    {
      id: 3,
      title: "ORGANIZATION MANAGEMENT",
      description:
        "🧱 Application that helps us to manage everything in our organization.",
      techs: ["JavaScript", "ReactJS", "MongoDB", "Tailwind", "CSS"],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);

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
    <section className="min-h-[80vh]" id="projects">
      <div className="font-bold text-4xl py-[3em] text-center mt-[20vh]">
        Projects
      </div>

      <div className="w-full relative overflow-hidden max-w-[500px] mx-auto">
        <div className="slider-wrapper flex" style={getSliderStyle()}>
          {projects.map((projectData, index) => (
            // PROJECT CARD WRAPPER
            <div key={index} className="slider-item p-4">
              <ProjectCard data={projectData} />
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
    </section>
  );
};

export default Projects;
