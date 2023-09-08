import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const openNav = () => {
    setNav((prev) => !prev)
  }
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fffdf9] dark:bg-[#191a19] text-[#444544]">
        <div className="h-screen flex items-center justify-center">
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              onClick={handleThemeSwitch}
              className="bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-green-400 cursor-pointer"
            ></label>
          </div>
        </div>
        <ul className="hidden md:flex text-[#8892b0] dark:text-[#ccd6f6] ">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500}>
              Skill
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* {hamburger menu} */}
        <div onClick={openNav} className=" md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#b22725] flex flex-col justify-center items-center text-[#8892b0]'
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={openNav} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={openNav} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={openNav} to="skill" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={openNav} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={openNav} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="/"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#42b883]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff7e67]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
