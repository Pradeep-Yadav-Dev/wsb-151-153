"use client"
import React, { useState } from 'react'
import "./Header.css"


export default function Header() {
  const [topHeader, setTopHeader] = useState(false)

  const [effectLogo,setEffectLogo]=useState(false)

  window.addEventListener("scroll",(e)=>{
    
    if(window.scrollY>120){
      setEffectLogo(true)
    }
    else{
      setEffectLogo(false)
    }
  })

  console.log(effectLogo)
  return (
    <header>
      {/* header first */}
      <div className='max-w-[1200px] mx-auto  flex justify-between items-center p-4'>
        <div className="">Contact us 24/7 : +91-9781234560 / furniture@gmail.com</div>

        {topHeader == true ?
          <div className="">Login / Register</div>
          :
          <div className="">My Account</div>
        }


      </div>

      {/* header second */}

      {/* header third */}

      <div className={`max-w-[100vw] bg-[white] mx-auto z-[999] flex justify-between items-center p-4  ${effectLogo==true ? "fixed top-[10px] " : ""} `}>
        {effectLogo == true ? <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png' /> : ""}
        <ul className=' mainMenu w-full flex justify-evenly ' >
          <li>Home</li>
          <li>Living</li>
          <li>Sofa
            <div className='subMenu'>
              <div className="">
                <h3>Sofa Cum Bed</h3>

                <ul>
                  <li>Sofa Cum Bed</li>
                  <li>Wooden Sofa Cum Bed</li>
                </ul>
              </div>
              
              <div className="">
                <h3>Sofa Cum Bed</h3>

                <ul>
                  <li>Sofa Cum Bed</li>
                  <li>Wooden Sofa Cum Bed</li>
                </ul>
              </div>
              <div className="">
                <h3>Sofa Cum Bed</h3>

                <ul>
                  <li>Sofa Cum Bed</li>
                  <li>Wooden Sofa Cum Bed</li>
                </ul>
              </div>
            </div>
          </li>
          <li>Pages</li>
          <li>Contact us</li>

        </ul>
      </div>
    </header>
  )
}
