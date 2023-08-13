import { apiContext, useToggleContext } from "@/context/contextprovider";
import { useState, useContext } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Servicios = () => {
    AOS.init();
const data = useContext(apiContext)

    return (
        <div data-aos="fade-right" className="flex flex-col w-2/5 m-12 text-right items-end col-1">
            <h2 data-aos="fade-right"className="font-bold text-2xl  text-[#3A67CC]"> Sobre nosotros</h2>

            <h1 data-aos="fade-right"  className="text-4xl font-bold my-4">

                Traduce solo este título maravilloso y el navbar
            </h1>

            <div data-aos="fade-right" className='text-lg'>

                Usted debe tener un sólido conocimiento de HTML y CSS.
                Debe comprender la arquitectura de componentes de React.
                Debe tener buena atención al detalle, organización del código,
                habilidades de comunicación efectiva y capacidad para trabajar en equipo.

            </div>



            <h3 data-aos="fade-right" className="font-bold text-2xl text-stone-700">Usa Context para acceder a los títulos 
de abajo desde la sección anterior</h3>


<ul >
    {data.length!==0&&data.map((ser,i)=>{
                return( <li  className="text-zinc-700 font-medium" key={i}>{ser.title}</li>)})}
</ul>
        </div>

    )
}