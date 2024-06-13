import React from "react";
import BotlandLogo from "../assets/images/botland.jpg";

const Collaborations = () => {
  return (
    <div className="w-full text-white py-10 px-5 mt-[200px]">
      <div className="flex justify-center items-center font-bold">
        <p className="text-4xl mb-[50px]">Collaborations</p>
      </div>
			
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-lg mb-5 text-center max-w-[600px]">
          We are proud to collaborate with leading companies to bring the best
          technology solutions to our users. One of our notable collaborators is
          <span className="font-bold"> Botland</span>.
        </p>
        <a
          href="https://botland.com"
          target="_blank"
          className="flex items-center flex-col"
        >
          <img
            src={BotlandLogo}
            alt="Botland Logo"
            className="h-20 w-auto mr-3"
          />
          <span className="underline hover:text-slate-600 duration-300">
            Visit Botland
          </span>
        </a>
      </div>
    </div>
  );
};

export default Collaborations;
