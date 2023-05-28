import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#fa5923] dark:bg-[#1d2c49]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 dark:text-lime-400">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hamza Talha
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          i'm a Frontend React Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          hello everybody i'm trying to build my first portfolio using
          (React/Typescript) i'll do my best in this project because i really
          need to improve myself within learning and creating websites. i'll
          deployit as soon as possible on github stay stunned!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center dark:border-cyan-400 dark:bg-cyan-400 hover:bg-pink-600 hover:border-pink-600 dark:hover:bg-transparent dark:hover:border-lime-400">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
