import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
    <>
         <header className=" z-50 max-w-full w-full hidden lg:block  border border-[#c7c7c77e] sticky top-0 bg-[white] ">
                <nav className=" grid  grid-cols-[10%_auto_10%] gap-[15px] items-center ">
                    <Link to='/' >
                        <div className="  flex justify-center items-center border-r border-[#c7c7c781] py-[10px]  hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                            <img src="/images/blinkit-logo_casestudy.png" className=' w-[65%] ' alt="" />
                        </div>
                    </Link>
                    
                    <div className="  search overflow-hidden ">
                        <div className="flex items-center py-[15px] px-[10px] rounded-[18px] border bg-[#fcfcfc] relative  ">
                            <IoSearchSharp className=' text-[27px] ' />
                            
                            <input type="" className=' outline-0 border-0 ms-2  w-full relative ' />

                           
                            <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                            <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p>
                        </div>
                    </div>
                   
                    <div className="">
                        <button className=" flex items-center gap-[5px] bg-[green] p-[10px] rounded-[10px]">
                            <span className='text-[30px] invert-100'><MdOutlineShoppingCart /></span><span className='text-[white] capitalize font-bold'>my cart</span>
                        </button>
                    </div>
                </nav>
            </header>
            <header className="p-[20px] block lg:hidden">
            <div className="  search overflow-hidden  ">
                        <div className="flex items-center py-[15px] px-[10px] rounded-[18px] border bg-[#fcfcfc] relative  ">
                            <IoSearchSharp className=' text-[27px] ' />
                            
                            <input type="" className=' outline-0 border-0 ms-2  w-full relative ' />

                           
                            <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                            <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p>
                        </div>
                    </div>
            </header>
    </>
  )
}
