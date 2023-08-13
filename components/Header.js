'use client'
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import imagen from '../img/img1.png'
import imagen2 from '../img/img2.png'
import imagen3 from '../img/img3.png'

export const Header = ()=>{
return(
<>
      <div  className='h-96 bg-[#001854]  p-6 px-8 shadow-lg drop-shadow-2xl shadow-slate-700'  >
        
        <div className="flex  justify-between h-12 shadow-md  shadow-gray-600  bg-white rounded-lg p-2 px-4">

            <div className='flex  flex-row space-x-14 items-center  '>
            <h3 className='hover:border-b-2 border-blue-900 text-blue-800'>Inicio</h3>
            <h3 className='hover:border-b-2 border-blue-900' >Inicio</h3>
            <h3 className='hover:border-b-2 border-blue-900'>Inicio</h3>
            <h3 className='hover:border-b-2 border-blue-900'>Inicio</h3>
            <h3 className='hover:border-b-2 border-blue-900'>Inicio</h3>
                </div>

            <div className='flex items-center space-x-4'>
           <button className='bg-blue-800 transition-all shadow-md shadow-slate-700 text-white rounded-3xl px-2 w-auto h-8 text-sm text-center hover:border-2 border-blue-600'>Contactar</button>
           <div>B</div>
            </div>


        </div>



        <section className='flex h-96 flex-auto justify-between mt-4 '>


<div className='mt-10 ml-5 '>
<h1 className='text-4xl text-white font-bold '>Es Tiempo <br/> de maquetar</h1>
<div className=' text-gray-400 font-bold  text-lg    my-5 ' >Debes usar <span className='text-white'>NextJS</span> y <span  className='text-white'>Tailwind CSS</span> . Cada sección de la <br/> página debe ser un componente individual. Usa el módulo <br/>
<span  className='text-white'>next-intl</span> para internacionalización. Usa la imaginación<br/> para desarrollar el responsive de la versión móvil.</div>

</div>

<Image alt='Logo' className=' lg:w-[27rem] h-auto z-30' src={imagen} />
<Image alt='Logo de fondo' className=' z-20   absolute w-4/5 h-3/4  left-[35%] ' src={imagen2} />
<Image alt='Logo' className='h-10 w-auto ml-36 top-[23.5rem] absolute   ' src={imagen3}  />
</section>
        </div>
       
        </>


      
)}