import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Nodejs from '../assets/node.png'
import Javascript from '../assets/javascript.png'
import Mongodb from '../assets/mongo.png'
import Reactjs from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div
      id="skill"
      className="w-full h-screen bg-[#b22725]  dark:bg-[#191a19] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">/ These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Html} alt="html" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Css} alt="css" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Javascript} alt="javascript" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Reactjs} alt="reactjs" className="w-20 mx-auto" />
            <p className="my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Mongodb} alt="mongodb" className="w-20 mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Nodejs} alt="nodejs" className="w-20 mx-auto" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="tailwind" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Firebase} alt="firebase" className="w-20 mx-auto" />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
