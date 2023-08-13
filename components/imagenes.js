import imagen1 from '../img/group.png'
import imagen2 from '../img/group2.png'
import imagen3 from '../img/group3.png'
import imagen4 from '../img/group4.png'
import imagen5 from '../img/group5.png'
import Image from 'next/image'



export const Imagenes = () => {


    return (


        <div className=' grid grid-rows-3 grid-cols-3 z-20  w-2/5  pb-20 h-[38rem] ml-28'>


            <div className='absolute -z-10  bg-[#2E53A3] h-80 rounded-lg  w-36 '></div>

            <Image alt='group' className='w-full h-full row-span-2 hover:scale-105 transition-all border-sky-600' src={imagen1} />

            <Image alt='group' className=' w-full h-full hover:scale-105 transition-all  col-span-2' src={imagen2} />

            <Image alt='group' className='w-full h-full hover:scale-105 transition-all' src={imagen3} />

            <Image alt='group' className=' w-full h-full hover:scale-105 transition-all row-span-2' src={imagen4} />

            <Image alt='group' className=' w-full h-full hover:scale-105 transition-all col-span-2' src={imagen5} />

            <div className='absolute -z-10 bg-[#3D93FF] top-[79.3rem] left-[37%] h-80 rounded-lg  w-36 '></div>





        </div>
    )
}