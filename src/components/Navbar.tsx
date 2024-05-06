import react, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const initialTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
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
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    setTimeout(() => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, 2000)
  }

  return (
    <react.Fragment>
      <div className="fixed w-full h-[80px] flex justify-between  z-10 items-center px-4 bg-[#fffdf9] dark:bg-[#191a19] text-[#444544]">
        <div className="h-screen flex items-center justify-center">
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              checked={theme === 'dark'}
              type="checkbox"
              name="toggle"
              id="toggle"
              onChange={handleThemeSwitch}
              className="bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-green-400 cursor-pointer"
            ></label>
          </div>
        </div>
        <ul className="hidden md:flex text-[#8892b0] dark:text-[#ccd6f6] ">
          <li className="hover:text-[#b22725]">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#b22725]">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-[#b22725]">
            <Link to="skill" smooth={true} duration={500}>
              Skill
            </Link>
          </li>
          <li className="hover:text-[#b22725]">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:text-[#b22725]">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={openNav} className=" md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#fffdf9] dark:bg-[#191a19] flex flex-col justify-center items-center text-[#8892b0]'
          }
        >
          <li className="py-6 text-4xl">
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                checked={theme === 'dark'}
                type="checkbox"
                name="toggle"
                id="toggle"
                onChange={handleThemeSwitch}
                className="bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-green-400 cursor-pointer"
              ></label>
            </div>
          </li>
          <li className="py-6 text-4xl hover:text-[#b22725]">
            <Link onClick={openNav} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#b22725]">
            <Link onClick={openNav} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl  hover:text-[#b22725]">
            <Link onClick={openNav} to="skill" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl  hover:text-[#b22725]">
            <Link onClick={openNav} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl  hover:text-[#b22725]">
            <Link onClick={openNav} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="https://www.linkedin.com/in/hamza-talha/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="https://github.com/hamzatalha77"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="https://twitter.com/HamzaTalha_Web7"
              >
                Twitter <FaSquareXTwitter size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff7e67]">
              <a
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                href="https://firebasestorage.googleapis.com/v0/b/something-5e33c.appspot.com/o/Hamza%20Talha%20CV%202024%20FR.pdf?alt=media&token=d6c50f6a-8ce2-4f90-a253-56326cc11896"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </react.Fragment>
  )
}

export default Navbar
