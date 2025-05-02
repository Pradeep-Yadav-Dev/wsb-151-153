import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InnerComponenets from './InnerComponenets';

function App() {
  
  let a=10;

  let b="pradeep"

  let Arr={
    name:"Praddep",
    age:26,
    location:"Rj",
    img:"https://packshifts.in/images/bike-shifting.jpg"
  }

  let newArr=[
    {
      name:"Praddep",
      age:26,
      location:"Rj",
      img:"https://packshifts.in/images/bike-shifting.jpg"
    },
    {
      name:"ravi",
      age:26,
      location:"Rj",
      img:"https://packshifts.in/images/bike-shifting.jpg"
    },
    {
      name:"ppp",
      age:26,
      location:"Rj",
      img:"https://packshifts.in/images/bike-shifting.jpg"
    },
    {
      name:"jjj",
      age:26,
      location:"Rj",
      img:"https://packshifts.in/images/bike-shifting.jpg"
    }
  ]

 

  return (
    <>
      <h1> Welcome to Home Page {a}  </h1>
      <InnerComponenets  props={a} secProps={b}  Arr={Arr}  newArr={newArr} />
    </>
  )
}

export default App
