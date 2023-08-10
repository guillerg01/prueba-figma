'use client'

import { Header } from '@/components/Header'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@/components/cards';

export default function  Home ()  {

  const[servicios, setServicios] = useState([])
 const URL = "https://react-frontend.pages.dev/slides.json"
 useEffect(()=>{
  const response  = axios.get(URL).then(res=>{setServicios(res.data); console.log(servicios) })
 },[])
  
  return (
    <main>
      <div className=" h-screen">
        <div className="mt-24 flex flex-wrap gap-10">
          <div className="mx-24">
            <h2 className="font-bold text-lg text-[#3A67CC]"> Servicios</h2>
            <h1 className="text-3xl font-bold">
              Esta info te llega desde<hr></hr> un servicio externo
            </h1>
            <div className="">
              Consultando el servicio en <hr></hr>
              https://react-frontend.pages.dev/slides.json, <hr></hr>debes usar
              Context para enviar los datos que<hr></hr> necesitas en la sección
              de abajo. A la derecha <hr></hr>tiene un slide o carrusel.
            </div>
            <button className="bg-blue-800 transition-all text-white rounded-3xl shadow-md shadow-slate-700 mt-2  w-32 h-8 text-md text-center hover:border-2 border-blue-600">
              Ver Mas
            </button>
          </div>

          
            {servicios.length!==0&&servicios.map((ser,i)=>{
              return(<Card key={i} heading={ser.title} para={ser.description}></Card>)
            })
            }
          
        </div>
      </div>
    </main>
  );
}
