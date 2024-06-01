import React from 'react';
import Skills from './Skills';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import BaseButton from './BaseButton';

const About = () => {
  return (
    <div className="bg-primary h-screen w-full" name="about">
      <div className="text-white max-w-[1000px] flex flex-col justify-center px-[100px] h-full">
        <p className="text-pink-700">Hi, my name is</p>
        <h1 className="text-6xl md:text-4xl text-white">Marwan Mai</h1>
        <h2 className="text-gray-300 md:text-4xl text-6xl font-bold">
          I'm a Fullstack Developer
        </h2>
        <p className="text-gray-300 max-w-[700px] py-4">
          I specialize in building web applications. I am currently focusing on
          backend development with Node and using Nestjs
        </p>
        {/* <div className="group cursor-pointer flex gap-3 item-center justify-center py-2 px-6 mx-auto text-white border-2 bg-primary hover:bg-secondary">
          <button className='text-white'>View Work</button>
          <ArrowRightIcon className="text-white w-4 group-hover:rotate-90" />
        </div> */}
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
