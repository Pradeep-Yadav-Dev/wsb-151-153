"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [allData, setAllData] = useState([])

  console.log(allData)

  let displayData = () => {
    axios.get("https://dummyjson.com/products")
      .then((ress) => {
        setAllData(ress.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    displayData()
  }, [])
  return (
    <>
      <div className="w-full p-[10px] grid grid-cols-4 ">

        {allData.length > 0
          ?
          allData.map((v,i)=>{
            return(
              <Card  data={v} index={i} />
            ) 
          })
          :
          "please wait............."
        }


      </div>
    </>
  );
}

let Card = ( {data} ) => {
  return (
    <div className=" m-[5px]  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/product-detail-page/${data.id}`}>
        <img className="rounded-t-lg" src={data.thumbnail} alt="" />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {data.title} </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          id: {data.id}
         
        </a>
      </div>
    </div>

  )
}




