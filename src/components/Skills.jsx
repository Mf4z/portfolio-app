import React from 'react'

import AWS from "../assets/aws.png"
import CSS from "../assets/css.png"
import FireBase from "../assets/firebase.png"
import GitHub from "../assets/github.png"
import HTML from "../assets/html.png"
import MongoDB from "../assets/mongo.png"
import Node from "../assets/node.png"
import ReactJs from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name="skills"className="bg-primary">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
            <p className='text-white text-3xl font-bold inline border-b-4 border-pink-700'>Skills</p>
            <p className='text-gray-300 py-3'>These are the technologies I've worked with</p>
        </div>

        <div className='grid w-full grid-cols-2 md:grid-cols-4 gap-4 py-8'>
            <div>
                <img className="w-[60px] mx-auto" src={CSS} alt="css logo" />
                <p className=''>CSS</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
