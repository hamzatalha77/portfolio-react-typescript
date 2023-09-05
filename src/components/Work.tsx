import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestore } from '../config/firebase'

const Work = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'portfolios'))
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setData(dataArray)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div
      id="work"
      className="w-full md:h-screen  dark:bg-[#191a19] text-[#444544] bg-[#b22725]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#444544] border-[#b22725]">
            Work
          </p>
          <p className="py-6">/Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
