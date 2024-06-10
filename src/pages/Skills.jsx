import React from "react";

import AWS from "../assets/aws.png";
import CSS from "../assets/css.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import MongoDB from "../assets/mongo.png";
import Node from "../assets/node.png";
import ReactJs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

import SkillItem from "../components/SkillItem";

const Skills = () => {
  const skills = [
    {
      src: AWS,
      alt: "AWS logo",
      title: "AWS",
    },
    {
      src: CSS,
      alt: "CSS logo",
      title: "CSS",
    },
    {
      src: FireBase,
      alt: "Firebase logo",
      title: "Firebase",
    },
    {
      src: GitHub,
      alt: "GitHub logo",
      title: "GitHub",
    },
    {
      src: HTML,
      alt: "HTML logo",
      title: "HTML",
    },
    {
      src: MongoDB,
      alt: "MongoDB logo",
      title: "MongoDB",
    },
    {
      src: Node,
      alt: "Node logo",
      title: "Node",
    },
    {
      src: ReactJs,
      alt: "ReactJs logo",
      title: "ReactJs",
    },
    {
      src: Tailwind,
      alt: "Tailwind logo",
      title: "Tailwind",
    },
  ];
  return (
    <div name="skills" className="bg-primary h-screen w-full">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-white text-3xl font-bold inline border-b-4 border-pink-700">
            Skills
          </p>
          <p className="text-gray-300 py-3">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              src={skill.src}
              title={skill.title}
              alt={skill.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
