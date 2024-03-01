import React from "react";
import GithubIcon from "../assets/images/githubIcon.svg";

const ProjectCard = () => {
  return (
    <div className="text-lg text-center shadow-md shadow-slate-700 hover:shadow-slate-500 w-fit mx-auto flex flex-col rounded-lg p-4 text-slate-500 duration-300">
      {/* TITLE */}
      <div className="text-slate-200">TRACKER</div>

      {/* DESCRIPTION */}
      <p className="text-slate-400 text-center p-4">
        Application that enables users to track different things that they want
        to track while they are feeling bored
      </p>

      {/* TECH STACK */}
      <div className="flex gap-3 mx-auto">
        <div className="tech-item">JavaScript</div>
        <div className="tech-item">Firebase</div>
        <div className="tech-item">Tailwind</div>
      </div>

      <div className="flex justify-between mt-3">
        {/* GITHUB ICON */}
        <img
          src={GithubIcon}
          className="w-[25px] opacity-80 hover:opacity-100 cursor-pointer duration-300"
        />
        <button className="flex hover:text-slate-400 duration-300">Preview</button>
      </div>
    </div>
  );
};

export default ProjectCard;
