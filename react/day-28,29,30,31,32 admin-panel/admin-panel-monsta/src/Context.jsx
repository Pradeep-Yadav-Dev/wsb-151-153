import React, { Children, createContext, useState } from 'react'

export let AdminContext = createContext()

export default function Context({ children }) {
  const [headerTrue, setHeaderTrue] = useState(false)

  
  return (
    <AdminContext.Provider value={{ headerTrue, setHeaderTrue }} >
      {children}
    </AdminContext.Provider>
  )
}
