import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestore } from '../config/firebase'
import { FaGithub } from 'react-icons/fa'

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
      className="w-full md:h-screen  dark:bg-[#191a19] text-[#b22725] dark:text-[#444544] bg-[#fffdf9]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#444544] dark:border-[#b22725]">
            Work
          </p>
          <p className="py-6 text-[#000000] dark:text-[#f2f2f2]">
            ✍ /Check out some of my recent work
          </p>
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3">
          {data.map((item) => (
            <div key={item.id} className="mx-3 mt-6  flex flex-col rounded-lg">
              <div className="screen">
                <img
                  className="rounded-t-lg"
                  src={item.imageUrl}
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              {/* <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {item.name}
                </h5>
              </div> */}
            </div>
          ))}
        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg flex">
                      <FaGithub size={25} className="mr-2" />
                      GitHub
                    </button>
                  </a>
                  <p className="text-left text-sm text-white">{item.live}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Work
