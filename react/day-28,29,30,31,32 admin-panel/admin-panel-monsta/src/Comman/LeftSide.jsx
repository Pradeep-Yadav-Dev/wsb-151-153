import React from 'react'
import {Nav} from "./NavData.js";
import { Link } from 'react-router-dom';

export default function LeftSide() {

    console.log(Nav)
    return (
        <>
            <div className="w-full">

                {Nav.map((item,index)=>{
                    return(
                         <div className="row  my-[5px]">
                    <h3 className='py-[10px] px-[5px] text-center bg-[#ccc] text-[20px] font-bold  ' > {item.title} </h3>
                    <div className='bg-[gray]'>
                        <ul>
                            {item.subnMenu.map((v,i)=>{
                                return(
                                 <Link to={`${v.link}`} >    <li > {v.subTitle} </li> </Link>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
                    )
                })}

               

                
               
            </div>
        </>
    )
}
