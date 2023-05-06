import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo1.png'
const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="logo image" style={{ width: '50px' }} />
        </div>
        {/* {menu} */}
        <div>
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* {hamburger} */}
        <div className="hidden">
          <FaBars />
        </div>
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
