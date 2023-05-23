import React from 'react'
import WorkinImg from '../assets/workImg.jpeg'
import { useEffect, useState } from 'react'
import { DataItem } from '../interface/dataItem'
import { DocumentData, QuerySnapshot, collection, getDoc, getFirestore, query } from 'firebase/firestore'

const Work = () => {
  const [fetchData, setFetchData] = useState<DataItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        const collectionRef = collection(db,'portfolios')
        const q = query(collectionRef)
        const querySnapshot : QuerySnapshot<DocumentData> = await getDoc(q)
        const dataItems:DataItem[]=[]
        const fetchImageUrls: string[]=[]
        querySnapshot.docChanges.forEach((doc:QuerySnapshot<DocumentData>)=>{
          const dataItem:DataItem={
              id:doc.id,
              name:doc.data().name
              github:doc.data().github
              live:doc.data().live
              imageurl:doc.data().name
          }
        })
      } catch (error) {

      }
    }
  })
  return (
    <div
      data-name="work"
      className="w-full h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">/Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkinImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
