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
import ThemeToggle from "./ThemeToggle.jsx";
import { Link as Scrolling } from "react-scroll";
import { Link } from "react-router-dom";

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
        <p className="text-4xl">{LOGO_NAME}</p>
      </div>

      {/* Menu for desktop screens ()>= 768px) */}
      <div className="flex item-center gap-8">
        <ThemeToggle></ThemeToggle>
        <ul className="hidden md:flex gap-4">
          <li className="cursor-pointer">
            <Scrolling to="about" smooth={true} duration={500}>
              About
            </Scrolling>
          </li>
          <li className="cursor-pointer">
            <Scrolling to="skills" smooth={true} duration={500}>
              Skills
            </Scrolling>
          </li>
          <li className="cursor-pointer">
            <Scrolling to="work" smooth={true} duration={500}>
              Experience
            </Scrolling>
          </li>
          <li className="cursor-pointer">
            <Scrolling to="contact" smooth={true} duration={500}>
              Contact
            </Scrolling>
          </li>
        </ul>
      </div>

      <div onClick={handleNavClick} className="md:hidden z-10">
        {!mobileNav ? (
          <Bars3Icon className="z-10 w-6 text-white" />
        ) : (
          <XMarkIcon className="z-10 w-6 text-white" />
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
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
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
