'use client'
import { useEffect, useState } from 'react'
import './css/ojos.css'




export const Ojos2 = ()=>{
   const[x,setX] = useState('50%')
   const[y,setY] = useState('50%')
   if (typeof window !== 'undefined') {
document.onmousemove = function(){
    if(((event.clientX *100 / window.innerHeight)-67)<100&&((event.clientX *100 / window.innerHeight)-67)>0){    setX((event.clientX *100 / window.innerHeight)-67 + "%")}
if((event.clientY *100 / window.innerHeight)<100&&(event.clientY *100 / window.innerHeight)>0){setY(event.clientY *100 / window.innerHeight + "%")}
    
  
}}


    return(

        <div  className='eyes' >
            <div className="eye">
                <div id='balll' style={{top:`${y}` ,left:`${x}`}} className="ball"></div>
            </div>
            <div className="eye">
                <div id='balll'style={{top:`${y}` ,left:`${x}`}} className="ball"></div>
            </div>
            


        </div>
    )
}