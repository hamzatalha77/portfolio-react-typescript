import React from 'react'
import WorkinImg from '../assets/workImg.jpeg'
import { useEffect, useState } from 'react'

import firebase from 'firebase/app'
const Work: React.FC = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const database = firebase.database()
      const ref = database.ref('portfolios') // Replace "yourDataPath" with the actual path to your data

      try {
        const snapshot = await ref.once('value')
        const dataVal = snapshot.val()
        if (dataVal) {
          const dataArray = Object.entries(dataVal).map(([key, value]) => ({
            id: key,
            ...value,
          }))
          setData(dataArray)
        }
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div
      data-name="work"
      className="w-full h-screen text-gray-300 bg-[#0a192f]"
    >
      {data.map((item) => (
        <div
          className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
          key={item.id}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6">/Check out some of my recent work</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wide">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      {item.github}
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      {item.live}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work
