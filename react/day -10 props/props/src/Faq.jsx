import React, { useState } from 'react'
import "./Faq.css"
import allFaq from "./Data.jsx"
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'

export default function Faq() {

    const [myFaq,setMyfaq]=useState(1)
    let openFaq=(id)=>{
        setMyfaq(id)
    }
    
    return (

        <div className="main">
            <h1> Faq </h1>
            <div className="allFaq">

                {allFaq.map((v, i) => {
                    return (
                        <div className="row" key={i} >
                            <h3 onClick={()=>openFaq(v.id)} > {v.id}.  {v.question} {myFaq==v.id ? <CiCircleMinus /> : <CiCirclePlus />}    </h3>
                            <p className={myFaq==v.id ? "active" : ""} > {v.answer} </p>
                        </div>
                    )
                })}



            </div>
        </div>

    )
}
