import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, DataSnapshot } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBrr86OuE6dPID1YZS1klQCLQ8bWtaON_I',
  authDomain: 'something-5e33c.firebaseapp.com',
  projectId: 'something-5e33c',
  storageBucket: 'something-5e33c.appspot.com',
  messagingSenderId: '886615306959',
  appId: '1:886615306959:web:716429962ce8af37f6fdba',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const Work: React.FC = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = () => {
      const portfoliosRef = ref(database, 'portfolios')

      const unsubscribe = onValue(portfoliosRef, (snapshot: DataSnapshot) => {
        const dataVal = snapshot.val()
        if (dataVal) {
          const dataArray = Object.entries(dataVal).map(([key, value]) => {
            const item = {
              id: key,
              ...(value as object),
            }
            return item
          })
          setData(dataArray)
        }
      })

      return () => {
        // Unsubscribe from the database reference when the component unmounts
        unsubscribe()
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
              style={{ backgroundImage: `url(${item.imageUrl})` }}
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
