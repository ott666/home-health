import Container from '@/components/components/Container'
import React from 'react'
import Servicos from '@/data/servicos.json'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicosSection(){
    return(
    <section className='py-5  flex items-center  px-4'>
        <Container>
            <h1 className='text-center text-[30px]  font-bold lg:text-6xl text-black'>Nossos serviços</h1>
           <div id='wrap-cards'
            className={`
           w-full py-5
           flex flex-wrap
           gap-2
           `}>
            {Servicos.map((servico)=>(
                
               <Link href={`/servicos/${servico.pseudo}`} key={servico.id} className={`
               flex flex-col h-fit bg-cyan-300 rounded-[25px] w-full sm:w-[49%] xl:w-[32%]  sm:h-[170px] md:h-[185px] xl:h-[210px] gap-2 p-[10px]`}  >
                <div className={`
                w-full h-fit flex lg:items-center lg:justify-center
                gap-2`}>

                    <div id='img' className='relative w-[44px] h-[40px] lg:w-[100px] lg:h-[70px] overflow-hidden bg-white flex items-center justify-center  rounded-full border-2 border-pink-600'>
                        <Image 
                        src={`/icons/${servico.pseudo}.svg`} alt='img' width={44} height={44}/>
                    </div>
               
                <h1  className='text-black -tracking-wider w-full text-lg md:text-2xl lg:text-[30px] xl:text-2xl font-semibold'>{servico.title}</h1>

                </div>

                <p className={`
                text-[15px] md:text-lg text-black
                `}>{servico.textCard}</p>
                
                   
               </Link>
            ))}
            </div>
        </Container>        
    </section>
        )

}