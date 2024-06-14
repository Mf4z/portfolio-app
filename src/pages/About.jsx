import React from "react";
import Skills from "./Skills";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import BaseButton from "../components/BaseButton";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${isDarkMode ? "bg-primary" : "bg-white"} h-screen w-full}`}
      name="about"
    >
      <div className="text-white max-w-[1000px] flex flex-col justify-center px-[100px] h-full mx-auto">
        <p className="text-pink-700">Hi, my name is</p>
        <h1
          className={`text-6xl md:text-4xl ${
            isDarkMode ? "text-white" : "text-primary"
          }`}
        >
          Marwan Mai
        </h1>
        <h2
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } md:text-4xl text-6xl font-bold`}
        >
          I'm a Fullstack Developer
        </h2>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-primary"
          } max-w-[700px] py-4`}
        >
          I specialize in building web applications. I am currently focusing on
          backend development with Node and using Nestjs
        </p>

        <div className="group flex gap"></div>
        <BaseButton text="View Work">
          <ArrowRightIcon className="text-white w-6 group-hover:rotate-90 duration-300" />
        </BaseButton>
      </div>
      <Skills></Skills>
    </div>
  );
};

export default About;
