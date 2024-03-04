import linkedInLogo from "../assets/images/linkedInLogo.svg"
import githublogo from "../assets/images/githubIcon.svg"

const DeveloperCard = ({ name, imageUrl, linkedInLink, githubLink }) => {
  return (
    <div className="text-lg text-center shadow-md shadow-slate-700 hover:shadow-slate-500 mx-auto flex flex-col rounded-lg p-4 text-slate-500 duration-300 min-w-[300px] gap-2 mx-auto">
      {/* DEVELOPER PROFILE IMG */}
      {imageUrl && (
        <img src={imageUrl} alt={`${name}'s profile`} className="rounded-full h-[40px] mb-2 mx-auto" />
      )}

      {/* NAME */}
      <p>{name}</p>

      {/* PROFILE LINKS */}
      <div className="flex justify-center gap-1">
        {linkedInLogo && (
          <a href={linkedInLink} target="_blank">
            <img src={linkedInLogo} alt="LinkedIn" className="profile-logo-link" />
          </a>
        )}

        {githublogo && (
          <a href={githubLink} target="_blank">
            <img src={githublogo} alt="Github DeveloperCard" className="profile-logo-link" />
          </a>
        )}
      </div>
    </div>
  );
};

export default DeveloperCard;