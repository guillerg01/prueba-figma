import { apiContext, useToggleContext } from "@/context/contextprovider";
import { useState, useContext } from "react"


export const Servicios = () => {
const data = useContext(apiContext)
console.log(data );
    return (
        <div className="flex flex-col w-2/5 m-12 text-right items-end col-1">
            <h2 className="font-bold text-2xl  text-[#3A67CC]"> Sobre nosotros</h2>

            <h1 className="text-4xl font-bold my-4">

                Traduce solo este título maravilloso y el navbar
            </h1>

            <div className='text-lg'>

                Usted debe tener un sólido conocimiento de HTML y CSS.
                Debe comprender la arquitectura de componentes de React.
                Debe tener buena atención al detalle, organización del código,
                habilidades de comunicación efectiva y capacidad para trabajar en equipo.

            </div>



            <h3 className="font-bold text-2xl text-stone-700">Usa Context para acceder a los títulos 
de abajo desde la sección anterior</h3>


<ul>
    {data.length!==0&&data.map((ser,i)=>{
                return( <li className="text-zinc-700 font-medium" key={i}>{ser.title}</li>)})}
</ul>
        </div>

    )
}