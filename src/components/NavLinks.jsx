import React from 'react'
import { Link } from "react-scroll";

const NavLinks = () => {
  const sections = ["home", "about", "projects", "contact"];

  return (
    <>
      {sections.map((section) => <Link
        to={section}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        key={section}
      >
        <li className="list-none cursor-pointer duration-300 rounded-md hover:bg-slate-900 hover:text-slate-700 px-3 py-1">{section[0].toUpperCase() + section.slice(1, section.length)}</li>
      </Link>)}
    </>
  )
}

export default NavLinks