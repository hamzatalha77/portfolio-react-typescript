import Nodejs from '../assets/node.png'
import Mongodb from '../assets/mongo.png'
import Reactjs from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Firebase from '../assets/firebase.png'
import Typescript from '../assets/typescript.png'
import Nextjs from '../assets/nextjs.png'
import Redux from '../assets/redux.png'
import Reveal from '../utils/Reveal'

const Skills = () => {
  return (
    <div
      id="skill"
      className="w-full h-screen bg-[#fffdf9]  dark:bg-[#191a19] text-[#b22725] dark:text-[#444544]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <Reveal>
            <p className="text-4xl font-bold inline border-b-4 border-[#444544] dark:border-[#b22725]">
              Skills
            </p>
          </Reveal>

          <Reveal>
            <p className="py-4 text-[#000000] dark:text-[#f2f2f2]">
              / These are the technologies I've worked with
            </p>
          </Reveal>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#8892b0]">
          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Reactjs} alt="reactjs" className="w-20 mx-auto" />
              <p className="my-4">REACT JS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Redux} alt="redux" className="w-20 mx-auto" />
              <p className="my-4">REDUX</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Typescript} alt="typescript" className="w-20 mx-auto" />
              <p className="my-4">TYPESCRIPT</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Nextjs} alt="nextjs" className="w-24 mx-auto" />
              <p className="my-4">Next JS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Mongodb} alt="mongodb" className="w-20 mx-auto" />
              <p className="my-4">MongoDB</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Nodejs} alt="nodejs" className="w-20 mx-auto" />
              <p className="my-4">NODE JS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Tailwind} alt="tailwind" className="w-20 mx-auto" />
              <p className="my-4">TAILWIND CSS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Firebase} alt="firebase" className="w-20 mx-auto" />
              <p className="my-4">FIREBASE</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Skills
