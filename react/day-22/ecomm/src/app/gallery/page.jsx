import React from 'react'
import Header from '../comman/Header'
import wsImg from "../../../public/7cc8f971f8763f04d244fed1ac1b4678.jpg"
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <Header/>
              <h1 > Gallery Page </h1>

              {/* <img src={"https://i.pinimg.com/736x/3c/5a/1a/3c5a1a95c2a571891a5753dbba547b5e.jpg"}/> */}
        {/* <img src={wsImg}/> */}

        <Image src={wsImg}/>
    </div>
  )
}
