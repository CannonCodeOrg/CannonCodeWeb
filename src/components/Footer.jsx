import React from "react";
import PjatkIcon from "../assets/images/PJATK.svg";
import IGLogo from "../assets/images/InstagramLogo.png";
import FBLogo from "../assets/images/FaceBookLOGO.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-black text-white pt-20">
      <div className="mt-2 mx-auto">
        CANNONCODE.
      </div>

      <div className="mt-2 mx-auto flex space-x-4">
        {/* PJATK Icon */}
        <a href="https://gdansk.pja.edu.pl/" target="_blank" rel="noopener noreferrer">
          <img src={PjatkIcon} alt="PJATK Icon" className="mx-auto mh-2 w-11" />
        </a>

        {/* Instagram Icon */}
        <a href="https://www.instagram.com/cannoncodepjatk/" target="_blank" rel="noopener noreferrer">
          <img src={IGLogo} alt="IG Icon" className="w-10 mx-auto mh-2" />
        </a>

        {/* Facebook Icon */}
        <a href="https://www.facebook.com/profile.php?id=61560965129991" target="_blank" rel="noopener noreferrer">
          <img src={FBLogo} alt="FB Icon" className="w-7 mx-auto mh-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
