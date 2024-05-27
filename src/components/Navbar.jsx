import React, {useState} from 'react'
import { LOGO_NAME } from '../constants.ts'

import { Bars3Icon, XMarkIcon, BuildingOfficeIcon, CodeBracketIcon, EnvelopeIcon, IdentificationIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const handleNavClick = () => {
        setMobileNav(!mobileNav)
    }
  return (
    <div className="fixed text-white w-full h-[80px] bg-primary flex justify-between items-center px-4">
      {/* Here is my navbar */}
      <div>
        <p className="text-4x1">{LOGO_NAME}</p>
      </div>

    {/* Menu for desktop screens ()>= 768px) */}
      <ul className="hidden md:flex gap-4">
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>

      <div onClick={handleNavClick} className='md:hidden z-10'>
        {!mobileNav ?
        (<Bars3Icon className='z-10 w-6 text-white'></Bars3Icon>) :
        (<XMarkIcon className='z-10 w-6 text-white'></XMarkIcon>)
        }
      </div>
      
      

      {/* Menu for mobile screens */}
      <ul className={
        mobileNav ? "absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col gap-6 bg-primary" : 'hidden'}>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Skills</li>
        <li className='cursor-pointer'>Experience</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      {/* Show my links */}
      <div className='fixed flex flex-col left-0 top-[35%]'>
        <ul className='text-white'>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className="flex justify-between items-center w-full" href="/">LinkedIn
                <BuildingOfficeIcon className='w-8'></BuildingOfficeIcon>
                </a>
            </li>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center bg-orange-700 ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className="flex justify-between items-center w-full" href="/">GitHub
                <CodeBracketIcon className='w-8'></CodeBracketIcon>
                </a>
            </li>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center bg-gray-400 ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className="flex justify-between items-center w-full" href="/">Mail
                <EnvelopeIcon className='w-8'></EnvelopeIcon>
                </a>
            </li>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center bg-green-400 ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className="flex justify-between items-center w-full" href="/">CV
                <IdentificationIcon className='w-8'></IdentificationIcon>
                </a>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
