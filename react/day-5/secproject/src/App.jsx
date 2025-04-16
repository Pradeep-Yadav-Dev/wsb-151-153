import { useState } from 'react'

import './App.css'

function App() {

  // let myAge=0

  let [myAge, setMyage] = useState(10)

  let addFn = () => {
    setMyage(myAge + 1)
  }

  let deFn = () => {
    if (myAge > 1) {
      setMyage(myAge - 1)
    }

  }

  return (
    <>

      <button onClick={deFn} > - </button>
      <h1> my Age is {myAge}  </h1>
      <button onClick={addFn} > + </button>
    </>
  )
}

export default App
