import React from "react";
import PjatkIcon from "../assets/images/PJATK.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-black text-white pt-20">
      {/* CANNON ICON */}
      <div className="mt-2 mx-auto">
        CANNONCODE.
      </div>

      <div className="mt-2 mx-auto">
        <a href="https://gdansk.pja.edu.pl/pl/"><img src={PjatkIcon} alt="PJATK Icon" className="w-20" /></a>
      </div>
    </footer>
  );
};

export default Footer;
