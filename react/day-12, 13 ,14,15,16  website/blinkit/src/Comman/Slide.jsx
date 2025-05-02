import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function Slide() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 3,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };
    return (
        <>
            <div className=" desktop hidden lg:block">
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/1.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/2.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/3.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/4.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/5.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/6.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/7.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/8.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/9.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/10.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/11.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/16.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/17.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/18.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/19.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/20.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/21.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/22.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/1(2).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/2(2).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/3(2).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/11.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/1(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/2(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/3(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/4(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/5(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/6(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/7(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/8(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/9(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/10(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/11(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/13(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/14(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/15(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/16(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/17(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/18(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/19(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/20(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/13(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/14(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/19(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/20(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/21(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/22(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/23(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/24(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/21(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/22(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/19(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/20(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/21(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/22(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/25(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/26(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/27(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/28(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/29(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/30.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/31.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/25(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/26(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/27(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/28(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/29(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/32.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/33.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/34.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/35.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/36.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/37.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/32.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/33.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/34.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/35.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/36.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/37.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
            </div>

            <div className=" desktop block lg:hidden">
                <h1 className='  text-[18px] md:text-[24px] font-bold capitalize mb-[10px] px-[20px]'  > daily bread and eggs</h1>
                <div className="w-[98%] px-[10px]">
                    <Slider {...settings} >
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/1.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/2.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/3.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/4.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/5.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/6.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/7.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/8.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/9.png" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                    </Slider>
                </div>
                <h1 className=' text-[18px] md:text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[10px]    ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/f7b3b2fa-b54d-40c5-849f-18e2c90babf3.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/cd20eda0-5158-4dd4-abe5-873d045b227e.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/56692a.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/3229ef67-1d89-4dc4-8beb-cdbe41e49f89.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/987e28e2-ca19-493a-9a1f-8dd09865b160.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/bac130c1-ca1d-49eb-a085-d105153b1cb7.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/2bf52d23-8c5e-4da5-82b4-a940c4dce411.jpg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/1(2).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/2(2).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/3(2).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/11.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[18px] md:text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className=" w-[98%] px-[20px] desktop   ">
                    <Slider {...settings} >
                        <Link to='/prn/' >
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/1(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/2(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/3(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/4(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/5(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/6(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/7(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className=" shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/8(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/9(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/10(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/11(1).jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px] px-[10px] py-[10px] cursor-pointer ">
                                <div className="">
                                    <img src="/images/slider/12.jpeg" alt="" />
                                </div>
                                <h1 className='   flex items-center  '>
                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                        8 mins
                                    </p>
                                </h1>
                                <h1 className=' w-[70%] font-medium capitalize text-[14px] my-[10px]'>
                                    amul tazza toned fresh milk
                                </h1>
                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                    1 ltr
                                </h1>
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                        $55
                                    </h1>
                                    <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                        add
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </Slider>
                </div>
                <h1 className='  text-[18px] md:text-[24px] font-bold capitalize mb-[10px] px-[20px] mt-[20px]'  > daily bread and eggs</h1>
                <div className="w-[98%] px-[10px]">
                    <Slider {...settings} >
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/37890899-af46-4fb0-93a7-eaddebb26f66.jpg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/b62f8a2c-ffd7-4f88-aab2-beb50352a3d6.jpg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/ba928bb8-40bb-4757-b50b-1261ae1053e5.jpg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/boneless_butter_chicken_01.jpeg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/ecb2357a-7b98-4f34-8eaf-15eaf656e50e.jpg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/egg_masala_01.jpeg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/gobi_matar_01.jpeg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/malai_kofta_01.jpeg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                        <Link to='/prn/'>
                            <div className="box rounded-[10px] overflow-hidden">
                                <img src="/images/slider/malai_palak_01.jpeg" alt="" className="rounded-[15px]" />
                                <h1 className="font-medium mt-[10px] text-[18px] capitalize text-center"> product</h1>
                            </div>
                        </Link>
                    </Slider>
                </div>

            </div>
        </>
    )
}
