
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {

  //  let counter=0

  const [counter, setCounter] = useState(1)

  let inFn = () => {
    setCounter(counter + 1)
  }

  let deFn = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  // for inputs

  const [showInput, setShowInput] = useState(true)
  const inputWork = () => {
    setShowInput(!showInput)
  }

  // for modal
  const [showModal, setShowMOdal] = useState(true)

  console.log(showModal)
  const modalWork = () => {
    setShowMOdal(!showModal)
  }

  let spanWork=()=>{
    setShowMOdal(!showModal)
  }


  return (
    <>
      {/* <button onClick={()=>setCounter(counter-1)} > - </button> */}
      <button onClick={deFn} > - </button>
      <h2> {counter} </h2>
      <button onClick={inFn} > + </button>



      {/* for show hide password */}

      <center>
        <input type={showInput == true ? "password" : "text"} placeholder='please enter password' />
        <button onClick={inputWork} >  {showInput == true ? "show" : "hide"}  </button>
      </center>

      {/* for-modal */}

      <hr />
      <div className="overLay" onClick={spanWork}  >
        <div className={`modal ${showModal == false ? "" : "activeModal"} `}> <span onClick={spanWork}> X </span> </div>
      </div>
      <button onClick={modalWork} style={ { "color":"red" , "background":"blue" }   } > Show Modal    </button>


    </>
  )
}

export default App
