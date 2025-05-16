import React from 'react'

import './App.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function App() {

  let navigate = useNavigate()

  const userForm = (e) => {
    e.preventDefault()

    axios.post("https://form-backend-by-py.onrender.com/api/website/user/register", e.target)
      .then((ress) => {
        toast.success(ress.data.message)

        setTimeout(() => {
          navigate("/list")
        }, 1500)
      })
      .catch((error) => {
        toast.error(error.response.data.message)
      })
  }

  


  return (
    <>
      <ToastContainer />
      <div className="formDiv ">

        <form onSubmit={userForm} class="max-w-md mx-auto border-2  p-5">

          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter name</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter email</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input type="number" name="contact" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter contact</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input type="radio" name='gender' value="male" />  Male
            <input type="radio" name='gender' value="female" />  Female

          </div>

          <div class="relative z-0 w-full mb-5 grou">
            <input type="file" name='profilePicture' />
            <label > Enter Image </label>

          </div>

          <div class="relative z-0 w-full mb-5 ">
            <textarea name="address" className='border' placeholder='enter address' id=""></textarea>

          </div>


          <div class="relative z-0 w-full mb-5 ">
            <input type="date" name="dob" id="" />
          </div>

          <div class="relative z-0 w-full mb-5 grou">

            <input type="checkbox" name="qualification" value="10" id="" /> 10
            <input type="checkbox" name="qualification" value="12" id="" /> 12
            <input type="checkbox" name="qualification" value="UG" id="" /> UG
            <input type="checkbox" name="qualification" value="PG" id="" /> PG


          </div>



          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


        </form>

      </div>
    </>
  )
}

export default App
