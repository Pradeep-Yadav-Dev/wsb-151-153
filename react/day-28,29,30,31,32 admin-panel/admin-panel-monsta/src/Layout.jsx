import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Comman/Header'
import LeftSide from './Comman/LeftSide'
import { AdminContext } from './Context'

export default function Layout() {

  let {headerTrue,setHeaderTrue}=useContext(AdminContext)

  //  grid-cols-[20%_auto]
  return (
    <div className={`w-full duration-[1s] h-screen grid ${headerTrue==true ? "grid-cols-[0%_100%]" : "grid-cols-[20%_auto]"} `} >
      <div className=" bg-[skyblue]"> <LeftSide /> </div>
      <div className=" bg-[red] ">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
