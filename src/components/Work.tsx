import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestore } from '../config/firebase'
import { FaGithub } from 'react-icons/fa'
import Reveal from '../typescript/Reveal'

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
          <Reveal>
            <p className="text-4xl font-bold inline border-b-4 border-[#444544] dark:border-[#b22725]">
              Work
            </p>
          </Reveal>

          <Reveal>
            <p className="py-6 text-[#000000] dark:text-[#f2f2f2]">
              ✍ /Check out some of my recent work
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <Reveal>
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 group-hover:w-1/2 group-hover:transition-all  group-hover:duration-1000">
                  <span className="text-2xl font bold text-[#b22725] tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    <a href={item.github} target="blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-[#b22725] font-bold text-lg"
                      >
                        <FaGithub size={30} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
