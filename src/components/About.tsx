const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-[#fffdf9]  dark:bg-[#191a19] text-[#b22725] dark:text-[#444544]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#444544]  dark:border-[#b22725] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#8892b0] dark:text-[#ccd6f6]">
            <p>Hi. i'm Hamza, nice to see you here please take a sit. </p>
          </div>
          <div>
            <p className="text-[#000000] dark:text-[#f2f2f2]">
              “Hard times create strong men. Strong men create good times. Good
              times create weak men. And, weak men create hard times.”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
