'use client'

import { Header } from '@/components/Header'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@/components/cards';
import {FiChevronRight , FiChevronLeft} from 'react-icons/fi'

export default function  Home ()  {

  const[servicios, setServicios] = useState([])
 const URL = "https://react-frontend.pages.dev/slides.json"
 useEffect(()=>{
  const response  = axios.get(URL).then(res=>{setServicios(res.data); console.log(servicios) })
 },[])
  






const scrollLeft = ()=>{
document.getElementById("content").scrollLeft -=200
}
const scrollRight = ()=>{
  document.getElementById("content").scrollLeft +=200
  
}
 
  return (
    <main>
       <Header></Header>
      <div className=" h-screen">
        <div className="mt-24 flex  ">
          <div className="mx-24">
            <h2 className="font-bold text-lg text-[#3A67CC]"> Servicios</h2>
            <h1 className="text-3xl font-bold">
              Esta info te llega desde un servicio <br></br> externo
            </h1>
            <div >
              Consultando el servicio en https://react-frontend.pages.dev/slides.json,<br></br>debes  usar
              Context para enviar los datos que necesitas en la sección
              de abajo.<br></br> A la derecha tiene un slide o carrusel.
            </div>
            <button className="bg-blue-800 transition-all text-white rounded-3xl shadow-md shadow-slate-700 mt-2  w-32 h-8 text-md text-center hover:border-2 border-blue-600">
              Ver Mas
            </button>
          </div>
          <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white"> 
          <FiChevronLeft /></button>
          <div id='content' className='carousel p-4 items-center flex justify-start scrollbar-hide scroll-smooth overflow-y-hidden overflow-x-auto relative' >
            {servicios.length!==0&&servicios.map((ser,i)=>{
              return(<div style={{margin: '1rem'}} >
              <Card  key={i} heading={ser.title} para={ser.description}></Card>
              </div>)
            })
            }
          </div>
       
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
        </div>
      </div>
    </main>
  );
}
