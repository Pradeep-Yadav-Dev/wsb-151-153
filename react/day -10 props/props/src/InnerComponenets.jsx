import React from 'react'

export default function InnerComponenets({props , secProps ,Arr ,newArr }) {

    
  return (
    <>
    <div>
      <h3> <center> Hello My Age Is  {props} {secProps}  </center> </h3>

      Name :{Arr.name}
      <br/>
      Age:{Arr.age}
      <br/>
      locations:{Arr.location}
      <br/>
      <img src={Arr.img}/>
    </div>

    <ul>
        

        {newArr.map((v,i)=>{
            return(
                <li> {v.name} {i+1} </li>
            )
        })}

       
    </ul>
    </>
    
  )
}
