import React, {useState} from 'react'
import { LOGO_NAME } from '../constants.ts'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

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
        {!mobileNav ?(<Bars3Icon className='z-10 w-6 text-white'></Bars3Icon>) :
        (<XMarkIcon className='z-10 w-6 text-white'></XMarkIcon>)
        }
      </div>
      
      

      {/* Menu for mobile screens */}
      <ul className={
        mobileNav ? "absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col gap-6 bg-primary" : 'hidden'}>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
      
    </div>
  )
}

export default Navbar
