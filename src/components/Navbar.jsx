import React, { useState } from "react";
import { LOGO_NAME } from "../constants.ts";

import {
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import SocialNav from "./SocialNav.jsx";

const navItems = [
  {
    color: "blue-600",
    Icon: "BuildingOfficeIcon",
    href: "/",
    title: "LinkedIn",
  },
  {
    title: "GitHub",
    Icon: "CodeBracketIcon",
    color: "orange-700",
    href: "/",
  },
  {
    title: "Mail",
    Icon: "CodeBracketIcon",
    color: "gray-400",
    href: "/",
  },
  {
    title: "CV",
    Icon: "IdentificationIcon",
    color: "green-400",
    href: "/",
  },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed text-white w-full h-[80px] bg-primary flex justify-between items-center px-4">
      {/* Here is my navbar */}
      <div>
        <p className="text-4x1">{LOGO_NAME}</p>
      </div>

      {/* Menu for desktop screens ()>= 768px) */}
      <ul className="hidden md:flex gap-4">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Experience</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <div onClick={handleNavClick} className="md:hidden z-10">
        {!mobileNav ? (
          <Bars3Icon className="z-10 w-6 text-white"></Bars3Icon>
        ) : (
          <XMarkIcon className="z-10 w-6 text-white"></XMarkIcon>
        )}
      </div>
      {/* Menu for mobile screens */}
      <ul
        className={
          mobileNav
            ? "absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col gap-6 bg-primary"
            : "hidden"
        }
      >
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Experience</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* Show my links */}
      <div className="fixed flex flex-col left-0 top-[35%]">
        <ul className="text-white">
          {navItems.map((item, index) => (
            <SocialNav
              key={index}
              text={item.text}
              href={item.href}
              bgColor={item.bgColor}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
