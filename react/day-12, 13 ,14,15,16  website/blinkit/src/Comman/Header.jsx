import React, { useState } from 'react'
import { FaSortDown } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineShoppingCart } from "react-icons/md";
import '/src/index.css'
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {  FiInfo } from "react-icons/fi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";


export default function Header() {

    let [offCanvas, setOffCan] = useState(false)
    let offCan = ()=>{
        setOffCan(true)        
    }
    let closefn = ()=>{
        setOffCan(false)  
        setdrop(false)
    }

    let [count,setCount] = useState(1)
    let inc = ()=>{
        setCount(count+1)
    }
    let dec = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    let [drop , setdrop] = useState(false)

    let dropdown =()=>{
        setdrop(!drop)

    }
    return (
        <>
            <header className={` max-w-full w-full hidden lg:block border border-[#c7c7c77e] sticky top-0 bg-[white]  ${drop ? "z-[60]" : "z-[30]"} `}>
                <nav className=" grid  grid-cols-[14%_20%_auto_12%_12%] gap-[10px] items-center ">
                    <Link to='/'>
                        <div className="flex justify-center items-center border-r border-[#c7c7c781] py-[10px]  hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                            <img src="/images/blinkit-logo_casestudy.png" className=' w-[65%] ' alt="" />
                        </div>
                    </Link>
                    <div className="  py-[15px] text-center grid justify-center hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                        <h1 className='text-[18px] font-bold capitalize'>
                            delivery in 8 minutes
                        </h1>
                        <p className="flex  items-center text-[15px] capitalize text-center">
                            b62 pocket b south city <FaSortDown />
                        </p>
                    </div>
                    <div className="  search overflow-hidden ">
                        <div className="flex items-center py-[15px] px-[10px] rounded-[18px] bg-[#F8F8F8] relative  ">
                            <IoSearchSharp className=' text-[27px] ' />
                            <Link to='/s/'>
                                <input type="" className=' outline-0 border-0 ms-2  w-full relative ' />

                            </Link>
                            <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                            <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p>
                        </div>
                    </div>
                    <div className=" text-center py-[15px] relative  hover:bg-[rgba(240,240,240,0.42)] duration-500">
                        <button onClick={dropdown} className='flex gap-[5px] items-center text-[20px] font-light capitalize mx-auto cursor-pointer '>
                            Account <span className='text-[18px]'> <FaSortDown /></span>
                        </button>

                        <button onClick={dropdown} className='flex gap-[5px] items-center text-[20px] font-light capitalize mx-auto cursor-pointer '>
                            <Link to={"/cart"}>
                            Cart <span className='text-[18px]'> 0 </span>
                            </Link>
                        </button>
                        
                        <div className={` z-[49] absolute h-[300px] w-[200px] right-0 bg-[white] top-[100%] ${drop ? "block" : "hidden"}  `}>
                            <div className="">
                                <ul>
                                    <li>order</li>
                                    <li>address</li>
                                    <li>number</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={offCan} className=" cursor-pointer flex items-center gap-[5px] bg-[green] p-[10px] rounded-[10px]">
                            <span className='text-[30px] invert-100'><MdOutlineShoppingCart /></span><span className='text-[white] capitalize font-bold'>my cart</span>
                        </button>
                    </div>
                </nav>
                
                <div className={`  overlay fixed w-full h-screen top-0 bg-[#00000090] hidden cursor-pointer z-40 ${offCanvas ? "active" : ""} ${drop ? "active" : ""} `} onClick={closefn}></div>


                <div className={`z-50 offcanvas absolute right-0 top-0 w-[30%] h-screen bg-white overflow-y-scroll hidden ${offCanvas ? "active" : ""}  `}>
                    <div className="flex justify-between items-center p-4 bg-white ">
                        <h1 className="text-[18px] font-bold text-gray-800">My Cart</h1>
                        <button onClick={closefn} className="text-gray-800 text-[25px] cursor-pointer">
                            <RxCross1 />
                        </button>
                    </div>

                    <div className="p-4 space-y-4">
                        <div className="bg-white rounded-lg p-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 rounded-[10px] p-3">
                                    <img src='/images/15-mins.png' className="text-green-700 h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-[16px] font-bold">Delivery in 8 minutes</h2>
                                    <p className="text-gray-500 text-[15px]">Shipment of 1 item</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-4"></div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 relative">
                                        <img src="/images/21.jpeg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[14px] text-gray-800">Amul Salted Butter</h3>
                                        <p className="text-gray-500 text-[12px]">100 g</p>
                                        <p className="font-medium">₹60</p>
                                    </div>
                                </div>

                                <div className="flex items-center bg-green-600 text-white rounded-md">
                                    <button className="px-1 py-1 text-white cursor-pointer" aria-label="Decrease quantity" onClick={dec}>
                                        <AiOutlineMinus  />
                                    </button>
                                    <span className="px-1 py-1"> {count} </span>
                                    <button className="px-1 py-1 text-white cursor-pointer" aria-label="Increase quantity" onClick={inc}>
                                        <AiOutlinePlus  />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-[16px] font-bold mb-4">Bill details</h2>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className=" text-[16px] text-gray-700">Items total</span>
                                    </div>
                                    <span className=" text-[16px] font-medium">₹60</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700 text-[16px]">Delivery charge</span>
                                        <FiInfo  className="text-gray-400" />
                                    </div>
                                    <span className="font-medium text-[16px]">₹25</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700 text-[16px]">Handling charge</span>
                                        <FiInfo  className="text-gray-400" />
                                    </div>
                                    <span className="font-medium text-[16px]">₹2</span>
                                </div>

                                <div className="border-t border-gray-100 pt-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[16px] font-bold">Grand total</span>
                                        <span className=" text-[16px] font-bold">₹87</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <div className="">
                                        <img src="/images/8(2).png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Feeding India donation</h3>
                                        <p className="text-gray-500 text-sm">
                                            Working towards a malnutrition free India. Feeding India...
                                            <span className="text-gray-400">read more</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">₹1</span>
                                    <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
               
                
            </header>

            <header className="mobile z-50 block lg:hidden sticky top-0 bg-[white] shadow-[0px_0px_5px_1px_gray] pb-[10px] pt-[10px] ">
                <nav className='  '>
                    <div className="flex justify-between">
                        <div className="  px-[20px] py-[5px]   hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                            <h1 className='text-[16px] font-bold capitalize'>
                                delivery in 8 minutes
                            </h1>
                            <p className="flex  items-center text-[12px] md:text-[15px] capitalize  overflow-hidden  ">
                                b62 pocket b south city sector 30 haryana 122027 india <FaSortDown />
                            </p>
                        </div>
                        <div className=" px-[20px] py-[20px] text-[35px] ">
                            <RiAccountCircleLine />
                        </div>
                    </div>

                    <div className=" px-[20px] search overflow-hidden ">
                        <div className="flex items-center py-[5px] md:py-[10px] px-[10px] rounded-[18px] bg-[#F8F8F8] relative  ">
                            <IoSearchSharp className=' text-[27px] ' />
                            <Link to='/s/'>
                                <input type="" className=' outline-0 border-0 ms-2  w-full relative ' />

                            </Link>
                            <p className='  sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                            <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    )
}
