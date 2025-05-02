import React, { useEffect, useState } from 'react'
import Header from './Comman/Header'
import Footer from './Comman/Footer'

import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';

import { FaCaretDown, FaCaretRight, FaCaretUp, FaMinus, FaPlus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';

export default function Product() {

  let pId = useParams().id

  const [loading,setLoading]=useState(false)

  const [singleData, setSingleData] = useState([])

  const [smallImg,setSmallImg]=useState([])
  
  const [bigImg,setBigImg]=useState("")


  const singleProduct = () => {
    axios.get(`https://dummyjson.com/products/${pId}`)
      .then((ress) => {
        setSingleData(ress.data);
        setSmallImg(ress.data.images)
        setBigImg(ress.data.thumbnail)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    singleProduct()
  }, [])


  const baseUrl = '/images/'

  const settings = {
    customPaging: function (i = 1) {


      return (
        <a>
          <img src={`${baseUrl}/Slide${i + 1}.jpg`} className='shadow rounded-2xl' />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    arrows: false,
  };

  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var settings3 = {
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
          slidesToShow: 2.5,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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

  let [img, setImg] = useState("/images/Slide1.jpg")

  // useEffect(()=>{
  //   setImg(singleData.thumbnail)
  // },[singleData])

  let [details, setDetails] = useState(false)
  let open = () => {
    setDetails(!details)
  }




  return (
    <>
      <Header />



      <div className="max-w-[1300px] desktop  mx-auto hidden lg:block">


        <div className=" grid grid-cols-[auto_45%] desktop    ">


          <div className=" overflow-y-scroll scroll  h-[110vh]  ">
            <div className="slider-container w-[100%]  mx-auto  ">
              <div className=" w-[80%] mx-auto z-[20]">

                <img src={bigImg} />

              
                <div className=" grid grid-cols-6  w-[90%] mx-auto">
                  

                  {loading==true ? 
                  smallImg.map((v,i)=>{
                    return(
                      <img src={v} className='border' onMouseOver={()=>setBigImg(v)}  />
                    )
                  })
                  :
                   ""
                    }

                </div>
              </div>

              <div className="details mt-[50px] bg-[#FFFFFF] px-[20px]">
                <h1 className=' text-[24px]  capitalize font-medium pb-[20px]'> product details</h1>
                <h2 className="text-[14px]  uppercase font-medium py-[5px]"> toned milk</h2>
                <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]">type</p>


                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Unit</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">1 l</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Storage Tip</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Refrigerated</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> FSSAI License</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10012021000071</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Shelf Life</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">2 days</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Return Policy</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Manufacturer's Name and Address</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Gujarat cooperative Milk Marketing Fedration Ltd., Amul Dairy Road, Opposite Hotel Surabhi, 388001</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Country of Origin</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">India</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Customer Care Details</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Email: info@blinkit.com</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller</h2>
                <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]">KEMEXEL ECOMMERCE PRIVATE LIMITED</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller FSSAI</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10823999000118</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Disclaimer</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>

              </div>


            </div>

          </div>


          <div className=" px-[40px] z-10 ">
            <div className="top pt-[40px] ">
              <ul className=' flex gap-[5px] capitalize text-[13px] font-medium '>
                <li> <Link to='/'>home / </Link> </li>
                <li> <Link to='/item/'> products / </Link> </li>
                <li> <Link to='/prn/'> milk </Link> </li>
              </ul>
            </div>
            <div className="">
              <h1 className=' font-bold text-[23px] py-[10px]'> { } </h1>
            </div>
            <div className="">
              <h1 className='   flex items-center  '>
                <img src="/images/slider/15-mins.png" className='w-[5%] bg-[#F5F5F5] ' alt="" />
                <p className=" capitalize bg-[#F5F5F5] font-medium text-[15px]">
                  8 mins
                </p>
              </h1>

              <Link >
                <h1 className=' mt-[10px]  flex items-center text-green-700 font-medium text-[20px]'>
                  <span>View all by Amul</span> <FaCaretRight />
                </h1>
              </Link>
            </div>
            <div className=" border-t my-[15px] border-gray-300 h-[2px] w-full "></div>
            <h1 className='font-medium text-[14px] text-gray-600'>Select Unit</h1>
            <div className="mt-[10px]">
              <button className=' capitalize shadow text-gray-900 text-[14px] bg-[#F7FFF9] font-medium p-[6px_12px] rounded-[10px] border border-green-600 cursor-pointer '>
                1 ltr
                <br />
                <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 55</span>
              </button>
              <button className='ms-[10px] capitalize text-gray-900 text-[14px] bg-[#FFFFFF] font-medium p-[6px_12px] rounded-[10px] border border-gray-300  cursor-pointer'>
                500 ml
                <br />
                <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 28</span>
              </button>

              <h1 className='font-medium text-[13px] py-[10px] text-gray-600'>(Inclusive of all taxes)</h1>
              <button className=' uppercase  shadow text-green-700 text-[15px] upp bg-[#F7FFF9] font-medium p-[4px_20px] rounded-[10px] border border-green-600 cursor-pointer '>
                add
              </button>
            </div>
            <div className="w-full">
              <h1 className=' font-medium text-[18px] py-[25px] text-gray-900'> Why shop from blinkit?</h1>
              <ul>
                <li className=' flex items-center gap-[20px]'>
                  <img src="/images/8(2).png" alt="" className='w-[15%]' />
                  <h1 className=''>
                    <p className='  text-[14px] '>
                      Superfast Delivery
                    </p>
                    <span className=' text-gray-600 text-[13px]' >
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </span>
                  </h1>
                </li>
                <li className=' py-[20px] flex items-center gap-[20px]'>
                  <img src="/images/9(2).png" alt="" className='w-[15%]' />
                  <h1 className=''>
                    <p className='  text-[14px] '>
                      Superfast Delivery
                    </p>
                    <span className=' text-gray-600 text-[13px]' >
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </span>
                  </h1>
                </li>
                <li className=' flex items-center gap-[20px]'>
                  <img src="/images/10(2).png" alt="" className='w-[15%]' />
                  <h1 className=''>
                    <p className='  text-[14px] '>
                      Superfast Delivery
                    </p>
                    <span className=' text-gray-600 text-[13px]' >
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </span>
                  </h1>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>


      <div className="block lg:hidden">
        <div className="slider w-[80%] mx-auto   ">
          <Slider {...settings2}>
            <div>
              <img src="/images/Slide1.jpg" alt="" />
            </div>
            <div>
              <img src="/images/Slide2.jpg" alt="" />
            </div>
            <div>
              <img src="/images/Slide3.jpg" alt="" />
            </div>
            <div>
              <img src="/images/Slide4.jpg" alt="" />
            </div>
            <div>
              <img src="/images/Slide5.jpg" alt="" />
            </div>
            <div>
              <img src="/images/Slide6.jpg" alt="" />
            </div>

          </Slider>
        </div>
        <div className=" px-[20px] ">
          <h1 className=' font-bold text-[23px] py-[10px]'> {singleData ? singleData.title : "title"} </h1>
        </div>
        <div className=" px-[20px]">
          <h1 className='   flex items-center  '>
            <img src="/images/slider/15-mins.png" className='w-[5%] bg-[#F5F5F5] ' alt="" />
            <p className=" capitalize bg-[#F5F5F5] font-medium text-[15px]">
              8 mins
            </p>
          </h1>
        </div>
        <div className="left">

        </div>
        <div className="mt-[10px]  px-[20px]">
          <button className=' capitalize shadow text-gray-900 text-[14px] bg-[#F7FFF9] font-medium p-[8px_20px] rounded-[10px] border border-green-600 cursor-pointer '>
            1 ltr
            <br />
            <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 55</span>
          </button>
          <button className='ms-[10px] capitalize text-gray-900 text-[14px] bg-[#FFFFFF] font-medium p-[8px_20px] rounded-[10px] border border-gray-300  cursor-pointer'>
            500 ml
            <br />
            <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 28</span>
          </button>

          <div className="flex justify-between  ">
            <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 28</span>
            <button type="button" className=" uppercase font-bold focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">add to cart</button>
          </div>

          <h1 className='font-medium text-[10px] text-gray-600'>(Inclusive of all taxes)</h1>

          <div className="">
            <h1 className=' font-bold text-[23px] py-[10px] capitalize'> highlights</h1>
            <button className=' capitalize text-gray-900 text-[14px] bg-gray-100 font-medium p-[8px_20px] rounded-[10px] border border-gray-300  cursor-pointer'>
              500 ml
              <br />
              <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 28</span>
            </button>
          </div>

        </div>

        <div className={details ? "block" : "hidden"}>
          <div className="details mt-[10px] bg-[#FFFFFF] px-[20px]">
            <h1 className=' text-[24px]  capitalize font-medium pb-[20px]'> product details</h1>
            <h2 className="text-[14px]  uppercase font-medium py-[5px]"> toned milk</h2>
            <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]">type</p>


            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Unit</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">1 l</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Storage Tip</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Refrigerated</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> FSSAI License</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10012021000071</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Shelf Life</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">2 days</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Return Policy</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Manufacturer's Name and Address</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Gujarat cooperative Milk Marketing Fedration Ltd., Amul Dairy Road, Opposite Hotel Surabhi, 388001</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Country of Origin</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">India</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Customer Care Details</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Email: info@blinkit.com</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller</h2>
            <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]">KEMEXEL ECOMMERCE PRIVATE LIMITED</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller FSSAI</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10823999000118</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Disclaimer</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>


          </div>


        </div>
        <div className=" flex cursor-pointer px-[20px] gap-1 items-center py-[20px] " onClick={open}>
          <h1 className='text-green-600 capitalize text-[15px] font-bold '> {details ? "view less details" : "view full details"} </h1>
          <span className='text-green-600'> {details ? <FaCaretUp /> : <FaCaretDown />}  </span>
        </div>
        <h1 className='  text-[24px] font-bold capitalize pt-[20px] mb-[10px] px-[20px]'  > top 10 products in this category</h1>
        <div className=" w-[98%] px-[20px] desktop   ">
          <Slider {...settings3} >
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
      </div>



      <Footer />
    </>
  )
}
