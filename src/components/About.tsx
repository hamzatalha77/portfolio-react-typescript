import Reveal from '../utils/Reveal'

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen dark:bg-[#191a19] text-[#b22725] dark:text-[#444544]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <Reveal>
              <p className="text-4xl font-bold inline border-b-4 border-[#444544]  dark:border-[#b22725] ">
                About
              </p>
            </Reveal>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#8892b0] dark:text-[#ccd6f6]">
            <Reveal>
              <h1>
                Hi. i'm Hamza, nice to see you here 😇 please take a seat.{' '}
              </h1>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p
                id="scrollingText"
                className="text-[#000000] dark:text-[#f2f2f2]"
              >
                “I'm Hamza Talha, a software engineer passionate about crafting
                innovative apps with cutting-edge technologies. Join me on this
                exciting journey into the world of software engineering and
                innovation.”
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
