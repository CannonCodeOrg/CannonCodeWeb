import React from "react";
import marcinimg from "../assets/images/marcin.jpg";
import ryszardimg from "../assets/images/ryszard.jpg";
import tytusimg from "../assets/images/tytus.jpg";
import wojtekimg from "../assets/images/wojciech.jpg";
import olgierdimg  from "../assets/images/olgierd.jpg";
import linkedinlogo from "../assets/images/linkedinlogo.svg"
import githublogo from"../assets/images/github.svg";


const About = () => {
  
  const developers = [
    {
      name: "Olgierd Karpacz",
      linkedinLink:"https://www.linkedin.com/in/olgierd-karpacz/",
      githubLink:"https://github.com/OKarpacz",
      imageUrl: olgierdimg,
    },
    {
      name: "Marcin Węgłowski",
      linkedinLink:"https://www.linkedin.com/in/marcin-w%C4%99g%C5%82owski/",
      githubLink:"https://github.com/mweglowski",
      imageUrl: marcinimg,
    },
    {
      name: "Ryszard Rakowicz",
      linkedinLink:"https://www.linkedin.com/in/ryszard-rakowicz-a403112b5/",
      githubLink:"https://github.com/",
      imageUrl: ryszardimg,
    },
    {
      name: "Wojciech Bińczyk",
      linkedinLink:"https://www.linkedin.com/in/wojciech-binczyk/",
      githubLink:"https://github.com/Rekar7",
      imageUrl: wojtekimg,
    },
    {
      name: "Tytus Sosiński",
      linkedinLink:"https://www.linkedin.com/in/tytus-sosi%C5%84ski-2bb019204/",
      githubLink:"https://github.com/",
      imageUrl: tytusimg,
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-4xl text-center">
        <div className="h-[15vh] flex justify-center items-center font-bold">
          <p>Welcome to CannonCode!</p>
        </div>
        <div className=" h-[100vh] flex flex-col items-center" style={{fontSize:'20px'}}>
          <p>
            Here is where science meets innovation! In our dynamic community, we
            push boundaries through collaborative projects, shaping tomorrow's
            tech. Whether you're captivated by algorithms, design, or
            problem-solving, CannonCode is your coding launchpad. Join us, and
            together, let's fire up the cannons of creativity and script the
            future!
          </p>
          <div className="h-[10vh] w-full mt-4 flex flex-col items-center font-bold" style={{fontSize:'32px'}}>
            <p>THE DEVS</p>
            </div>
            <div className="flex flex-wrap justify-center space-y-3">
              {developers.map((developer, index) => (
                <WhiteCard
                  key={index}
                  name={developer.name}
                  imageUrl={developer.imageUrl}
                  linkedinLink={developer.linkedinLink}
                  githubLink={developer.githubLink}
                />
                
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};


const WhiteCard = ({ name, imageUrl, linkedinLink, githubLink}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-2 text-black">
      {/* Developer's profile image */}
      {imageUrl && (
        <img src={imageUrl} alt={`${name}'s profile`} className="rounded-full h-[40px] mb-2 mx-auto" />
      )}

      {/* Whitecard Content-Text*/}
      <p className="mb-2" style={{fontSize:'30px'}}>{name}</p>
      
      {/*LinkedIn logo*/}
      <div className="flex items-center justify-center ">
      {linkedinlogo && (
        <a href={linkedinLink} target="_blank">
          <img src={linkedinlogo} alt = "LinkedIn" className="h-[30px] mb-2 mr-2" />
        </a>
      )}
      {/*Github logo*/}
      {githublogo && (
          <a href={githubLink} target="_blank">
            <img src={githublogo} alt="Github WhiteCard" className="h-[30px] mb-2" />
          </a>
        )}
     </div>
    </div>
  );
};
export default About;