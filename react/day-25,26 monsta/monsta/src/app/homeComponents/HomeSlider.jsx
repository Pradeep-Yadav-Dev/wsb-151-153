import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slderImg1  from "../../../public/images/Home Page/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg"
import Image from 'next/image';



export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <section  >
            <Slider {...settings}>
                <div>
                    <Image src={slderImg1} className='w-full' height={500} />
                </div>
                <div>
                    <Image src={slderImg1} className='w-full' height={500} />
                </div>
                <div>
                    <Image src={slderImg1} className='w-full' height={500} />
                </div>
                <div>
                    <Image src={slderImg1} className='w-full' height={500} />
                </div>
                <div>
                    <Image src={slderImg1} className='w-full' height={500} />
                </div>
                <div>
                    <Image src={slderImg1} className='w-full' height={500} />
                </div>
            </Slider>
        </section>
    )
}
