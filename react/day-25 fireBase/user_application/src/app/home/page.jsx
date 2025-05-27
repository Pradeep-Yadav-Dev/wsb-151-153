"use client"
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { getDatabase, ref, set, onValue } from "firebase/database";

import { app } from '../FireBaseConfig';

export default function page() {



    const database = getDatabase(app);

    let insertData = (e) => {
        e.preventDefault()


        let userId = uuidv4()

        let userData = {
            name: e.target.Uname.value,
            email: e.target.Uemail.value,
            password: e.target.Upassword.value,
            number: e.target.Unumber.value,
        }

        set(ref(database, 'bca-1/' + userId), userData);

        alert("done.....")

    }


    const [allData, setAllData] = useState([])

    const displayData = () => {
        const starCountRef = ref(database, 'bca-1/');

        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            for (let newD in data) {
                setAllData([...allData, data[newD]])
            }

            updateStarCount(postElement, data);
        });
    }


    useEffect(() => {
        displayData()
    }, [])



    console.log(allData)


    return (
        <div>


            <section className="w-full px-8 text-gray-700 bg-white">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">AI<span className="text-indigo-600">.</span></span>
                        </a>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Sign in
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Sign up
                        </a>
                    </div>
                </div>
            </section>


            <div className='max-w-[1200px] mx-auto bg-[#ccc] p-10 '>
                <form onSubmit={insertData} >
                    <input className='w-[80%] p-[5px] my-[5px] border-2 ' name='Uname' type='text' placeholder='enter your name' />

                    <input className='w-[80%] p-[5px] my-[5px] border-2 ' name='Uemail' type='email' placeholder='enter your email' />

                    <input className='w-[80%] p-[5px] my-[5px] border-2 ' name='Upassword' type='password' placeholder='enter your password' />

                    <input className='w-[80%] p-[5px] my-[5px] border-2 ' name='Unumber' type='number' placeholder='enter your number' />
                    <br />

                    <button class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Save </button>
                </form>
            </div>




            <div class=" max-w-[1200px] mx-auto relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ravi
                            </th>
                            <td class="px-6 py-4">
                                ravi@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                pass@123
                            </td>
                            <td class="px-6 py-4">
                                987643210
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>








        </div>
    )
}
