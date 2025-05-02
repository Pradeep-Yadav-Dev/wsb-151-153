import React from 'react'
import Header from './Comman/Header'
import Footer from './Comman/Footer'
import Slider from './Comman/Slide'
import { Link } from 'react-router-dom'


export default function App() {


  return (
    <>
      <Header />
      <section className=" desktop max-w-[1300px]  mx-auto hidden lg:block ">
        <div className="w-full">
          <Link to='/item/'>
            <img src="/images/1(3).jpeg" className=' w-full ' alt="" />
          </Link>

        </div>
        <div className="w-[78%] ps-[20px] grid grid-cols-3 gap-5 ">
          <Link to='/item/'>
            <img src="/images/3(1).jpeg" alt="" />
          </Link >
          <Link to='/item/'>
            <img src="/images/2(2).jpeg" alt="" />
          </Link>
          <Link to='/item/'>
            <img src="/images/1(4).jpeg" alt="" />
          </Link>
        </div>
        <div className=" grid grid-cols-10 ">
          <Link to='/item/'>
            <div className="box">
              <img src="/images/1.jpeg" alt="" />
            </div>
          </Link>
          <Link to='/item/'>
            <div className="box">
              <img src="/images/2.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>
            <div className="box">
              <img src="/images/3.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/4.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/5.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/6.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/7.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/8.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/9.png" alt="" />
            </div>
          </Link>
          <Link to='/item/'>

            <div className="box">
              <img src="/images/10.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" grid grid-cols-10 ">
          <Link to='/item/'>

            <div className="box">
              <img src="/images/11.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/12.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>


            <div className="box">
              <img src="/images/13.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/14.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/15.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/16.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/17.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/18.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/19.png" alt="" />
            </div>
          </Link>

          <Link to='/item/'>

            <div className="box">
              <img src="/images/20.png" alt="" />
            </div>
          </Link>
        </div>

        <Slider />


      </section>

      <section className=" mobile block lg:hidden mt-[20px]  ">
        <div className="w-full px-[20px] ">
          <h1 className='  text-[24px] font-bold capitalize mb-[10px]'  > shop by category</h1>
          <div className="grid grid-cols-2 gap-[15px] mb-[15px] ">
            <Link to='/item/'>
              <div className="box">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/1.png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables and fruits</h1>
              </div>
            </Link>
            <Link to='/item/'>

              <div className="box">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/2(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables and fruits</h1>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-[23%_auto_23%] gap-[15px] mb-[15px]">
            <Link to='/item/'>
              <div className="box overflow-hidden ">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/3(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > munchines</h1>
              </div>
            </Link>
            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/4(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables and fruits</h1>
              </div>
            </Link>
            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/5(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables and fruits</h1>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-[10px] mb-[15px]">
            <Link to='/item/'>

              <div className="box overflow-hidden ">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/6(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > munchines</h1>
              </div>
            </Link>

            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/7(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>

            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/8(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > fruits</h1>
              </div>
            </Link>

            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/9(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-[10px] mb-[15px]">

            <Link to='/item/'>

              <div className="box overflow-hidden ">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/10(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > munchines</h1>
              </div>
            </Link>
            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/11(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>
            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/12(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > fruits</h1>
              </div>
            </Link>
            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/13(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>

          </div>
          <div className="grid grid-cols-4 gap-[10px] mb-[15px]">
            <Link to='/item/'>
              <div className="box overflow-hidden ">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/14(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > munchines</h1>
              </div>
            </Link>

            <Link to='/item/'>
              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/15(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>

            <Link to='/item/'>
              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/16(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > fruits</h1>
              </div>
            </Link>

            <Link to='/item/'>
              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/17(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-[10px] mb-[15px]">
            <Link to='/item/'>

              <div className="box overflow-hidden ">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/18(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > munchines</h1>
              </div>
            </Link>
            <Link to='/item/'>


              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/19(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>
            <Link to='/item/'>


              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/20(1).png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > fruits</h1>
              </div>
            </Link>

            <Link to='/item/'>

              <div className="box overflow-hidden">
                <img className='bg-[#E5F3F3] rounded-[20px] ' src="/images/21.png" alt="" />
                <h1 className=' text-center text-[14px] font-medium capitalize'  > vegetables </h1>
              </div>
            </Link>

          </div>

        </div>


        <Slider />

        <div className="w-full mt-[30px] ">
          <img src="/images/1718624389849-Household-cleaning-essentials-KVI-slice-top.png" className=' w-full ' alt="" />
        </div>
        <div className="w-[100%] mx-auto grid grid-cols-4 bg-[#DAF2FF] gap-[15px] mt-[5px] py-[5px] px-[10px] ">
          <div className="box">
            <img className=' rounded-[10px] h-25' src="/images/1718624426915-Surface-Cleaners-Fresheners.jpeg" alt="" />
            <h1 className=' capitalize text-[15px] font-medium '>cleaning tools</h1>
          </div>
          <div className="box">
            <img className=' rounded-[10px] h-25' src="/images/1718624437262-Cleaning-Tools-Accessories.jpeg" alt="" />

            <h1 className=' capitalize text-[15px] font-medium '>cleaning tools</h1>
          </div>
          <div className="box">
            <img className=' rounded-[10px] h-25' src="/images/1718624445022-Trash-Disposal.jpeg" alt="" />

            <h1 className=' capitalize text-[15px] font-medium '>cleaning tools</h1>
          </div>
          <div className="box">
            <img className=' rounded-[10px] h-25' src="/images/1718624452674-Smart-Cleaning-Gadgets.jpeg" alt="" />
            <h1 className=' capitalize text-[15px] font-medium '>cleaning tools</h1>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}
