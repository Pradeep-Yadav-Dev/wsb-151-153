import React, { createContext, useState } from 'react'

export  const MyContext=createContext()

export default function ContextProvider( {children}) {

    const [wsData,setWsData]=useState(10)


  return (
    <MyContext.Provider value={{wsData,setWsData}} >
        {children}
    </MyContext.Provider>
  )
}
