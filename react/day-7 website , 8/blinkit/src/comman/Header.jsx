import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';

export default function Header() {
    return (
        <>
        {/* for pc Header */}
            <div className="hidden lg:block">
                <div className=' w-full border grid grid-cols-[10%_25%_auto_8%_8%] items-center gap-[10px] '>

                    <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNu2WOMoil4kbBvoo_lIXEkg4gYWWLpw_PA&s' /> </div>
                    <div className='border text-center ' >
                        <h3 className='font-bold text-[17px] ' >Delivery in 27 minutes</h3>
                        <p className='flex justify-center items-center ' > Jodhpur, Rajasthan, India  <FaCaretDown />  </p>
                    </div>

                    <div className='border rounded-[5px] p-[10px_15px] bg-[#ccc] flex  items-center' >
                        <IoSearch />
                        <input type="text" className='outline-none ml-[10px]' />
                    </div>
                    <div>Account</div>
                    <div> <button>items</button> </div>
                </div>
            </div>


                {/* for mobile Header */}
            <div className='block lg:hidden'>
                <div className='border  ' >
                    <h3 className='font-bold text-[17px] ' >Delivery in 27 minutes</h3>
                    <p className='flex  items-center ' > Jodhpur, Rajasthan, India  <FaCaretDown />  </p>
                </div>

                <div className='border rounded-[5px] p-[10px_15px] bg-[#ccc] flex  items-center' >
                        <IoSearch />
                        <input type="text" className='outline-none ml-[10px]' />
                    </div>
            </div>


        </>


    )
}
