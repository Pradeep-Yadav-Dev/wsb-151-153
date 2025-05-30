import React, { useState } from 'react'

export default function AddColor() {


  const [userImg,setUserImg]=useState("")

  let handelImg=(e)=>{
    setUserImg(URL.createObjectURL(e.target.files[0]))

  }
  return (
    
<form class="max-w-sm mx-auto">
  <div class="mb-5">
   
    <input type="file" onChange={(e)=>handelImg(e)}  id="email" class=" shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com"  />

    <img src={userImg} className='w-[200px] h-[200px] border-2 ' />
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

  )
}
