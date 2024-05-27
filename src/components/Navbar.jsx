import React from 'react'
import { LOGO_NAME } from '../constants.ts'

const Navbar = () => {
  return (
    <div className="fixed text-white w-full h-[80px] bg-primary flex justify-between items-center px-4">
      {/* Here is my navbar */}
      <div>
        <p className="text-4x1">{LOGO_NAME}</p>
      </div>
    </div>
  )
}

export default Navbar
