import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Reveal from '../utils/Reveal'

const Home = () => {
  return (
    <div id="home" className="w-full h-screen home   dark:bg-[#191a19]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full home2">
        <Reveal>
          <p className="text-[#b22725] text-2xl">
            Hi <span className="wave">👋</span> , My Name is
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Hamza Talha
          </h2>
        </Reveal>

        <Reveal>
          <h3 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            i'm a Software Engineer.
          </h3>
        </Reveal>

        <Reveal>
          <p className="text-[#000000] dark:text-[#f2f2f2] py-4 max-w-[700px]">
            "Hello everyone! I'm working on building my first portfolio using
            (React and TypeScript). I'll put my best effort into this project
            because I really want to improve my skills in both learning and
            creating websites. I'll deploy it on GitHub as soon as possible, so
            stay tuned!"
          </p>
        </Reveal>

        <div>
          <Reveal>
            <button className="text-[#b22725] dark:text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center dark:border-[#b22725] dark:bg-[#b22725] hover:bg-[#191a19] hover:border-[#191a19] dark:hover:bg-transparent border-[#b22725] dark:hover:border-[#b22725]">
              <Link to="Projects" smooth={true} duration={500}>
                View Projects
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Home
