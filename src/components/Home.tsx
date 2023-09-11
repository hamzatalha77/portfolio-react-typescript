import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { TimelineMax, TweenLite, gsap } from 'gsap'
import { useRef, useEffect } from 'react'

const Home = () => {
  const textRef = useRef(null)
  useEffect(() => {
    const el = textRef.current
    if (el) {
      const tl = gsap.timeline()
      tl.from(el, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
      })
    }
  }, [])
  return (
    <div id="home" className="w-full h-screen bg-[#fffdf9] dark:bg-[#191a19]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#b22725] text-2xl" ref={textRef}>
          Hi 👋, My Name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hamza Talha
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          i'm a Software Engineer.
        </h2>
        <p className="text-[#000000] dark:text-[#f2f2f2] py-4 max-w-[700px]">
          hello everybody i'm trying to build my first portfolio using
          (React/Typescript) i'll do my best in this project because i really
          need to improve myself within learning and creating websites. i'll
          deploy it as soon as possible on github stay stunned!
        </p>
        <div>
          <button className="text-[#b22725] dark:text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center dark:border-[#b22725] dark:bg-[#b22725] hover:bg-[#191a19] hover:border-[#191a19] dark:hover:bg-transparent border-[#b22725] dark:hover:border-[#b22725]">
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
