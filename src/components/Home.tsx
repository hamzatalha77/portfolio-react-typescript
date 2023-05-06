import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div data-name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, My Name is</p>
        <h1>Hamza Talha</h1>
        <h2>i'm a Frontend React Developer.</h2>
        <p>
          hello everybody i'm trying to build my first portfolio using
          (React/Typescript) i'll do my best in this project because i really
          need to improve myself withing learning and creating websites. i'll
          deployit as soon as possible on github stay stunned!
        </p>
        <div>
          <button>
            View Work
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
