import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  // Sync theme with the <html> class applied by the preload script in index.html
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleNav = () => setNav((prev) => !prev)

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 z-10 dark:bg-[#191a19] bg-white text-[#444544]">
        {/* Theme toggle */}
        <div className="flex items-center">
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              checked={theme === 'dark'}
              type="checkbox"
              name="toggle"
              id="toggle"
              onChange={handleThemeSwitch}
              className="bg-yellow-300 border-yellow-500 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-green-400 cursor-pointer"
            ></label>
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex text-[#8892b0] dark:text-[#ccd6f6] space-x-6">
          {['home', 'about', 'skill', 'TimeLine', 'work', 'contact'].map(
            (item) => (
              <li
                key={item}
                className="hover:text-[#b22725] capitalize cursor-pointer"
              >
                <Link to={item} smooth={true} duration={500}>
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile menu icon */}
        <div
          onClick={toggleNav}
          className="md:hidden z-10 cursor-pointer text-xl"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile menu */}
        <ul
          className={`${
            nav ? 'flex' : 'hidden'
          } absolute top-0 left-0 w-full h-screen dark:bg-[#191a19] bg-white flex-col justify-center items-center text-[#8892b0] dark:text-[#ccd6f6]`}
        >
          {/* Theme toggle in mobile */}
          <li className="py-6 text-4xl">
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                checked={theme === 'dark'}
                type="checkbox"
                name="toggle"
                id="toggle-mobile"
                onChange={handleThemeSwitch}
                className="bg-yellow-300 border-yellow-500 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle-mobile"
                className="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-green-400 cursor-pointer"
              ></label>
            </div>
          </li>
          {['home', 'about', 'skill', 'work', 'contact'].map((item) => (
            <li
              key={item}
              className="py-6 text-4xl hover:text-[#b22725] capitalize cursor-pointer"
            >
              <Link to={item} smooth={true} duration={500} onClick={toggleNav}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
              <a
                href="https://www.linkedin.com/in/hamza-talha/"
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                href="https://github.com/hamzatalha77"
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee]">
              <a
                href="https://twitter.com/HamzaTalha_Web7"
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter <FaSquareXTwitter size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff7e67]">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/something-5e33c.appspot.com/o/Hamza%20Talha%20CV%202025.pdf?alt=media&token=3dfee224-7571-4653-b1ce-bc218e950cbe"
                className="flex justify-between items-center w-full text-[#f1f1f1]"
                target="_blank"
                rel="noopener noreferrer"
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
