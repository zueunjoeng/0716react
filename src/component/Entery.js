import React, {useEffect, useState} from 'react'

function Entery() {
   const bgcolor = ['red', 'green', 'blue']

   useEffect(()=>{
    // document.querySelectorAll('li').forEach()
    //li는 태그. forEach는 어레이도 받고 변수도 받고?
   })
    return (
        <div>
            {
                bgcolor.map((e, i)=>{
                    return(
                        <button onClick={()=>{
                            document.body.style.backgroundColor = e;
                        }}>{e}</button>
                    )
                })
            }
            
        </div>        
    )
}

export default Entery
