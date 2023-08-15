import React from 'react'

import CtaServico from '@/components/components/CtaServico'
import Servicos from "@/data/servicos.json"
import Image from 'next/image'
import Link from 'next/link'
const servicosDestaque = ['acompanhamento', 'consulta-medica-domiciliar']



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function HeroSection(){
    
    const result = Servicos.filter((servico)=>{
        return servicosDestaque.find((a)=>{
            return servico.pseudo === a
        })
    })

    return(
        <div className='w-full bg-purple-400 h-[90vh] flex justify-center items-center'>

    <Swiper className='w-full h-full '
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >       
             <SwiperSlide className='w-full [h-80%] pt-10'>
            
                <div className={`
                h-full 
                w-full 
                flex flex-col xl:flex-row 
                justify-center items-center 
                gap-5  
                px-3 sm:px-5 relative
                `}>
                    <div className='z-10 h-[300px] md:h-[400px] w-full xl:w-[28%]  relative xl:absolute xl:left-0 xl:top-5  3xl:top-10 3xl:left-10 3xl:w-[500px] 3xl:h-[450px]'>
                        <Image style={{objectFit:'contain'}}
                        alt='logo' src={'/logo-hh.png'} fill={true}></Image>
                    </div>
                    <div className='flex flex-col justify-center gap-5 md:gap-10 items-center h-fit  z-10 md:max-w-[700px] xl:max-w-[800px] px-5 xl:px-0'>
                        <h1 className={`
                        text-white
                         text-center 
                         text-2xl mm:text-3xl sm:text-5xl md:text-5xl 3xl:text-6xl
                        font-bold`}>Serviços de Home Care em Ribeirão Preto e Região.</h1>
                        <p className='text-center text-lg sm:text-2xl md:text-2xl 3xl:text-3xl font-bolder  '>Os cuidados que você precisa no lugar que você deseja. Descubra a diferença que a Home Health Ribeirão faz na vida de quem você ama.</p>
                        <div className='flex flex-col sm:flex-row w-full justify-between gap-3 items-center'>
                        <Link className={`
                        text-xl sm:text-3xl font-bold bg-pink-300 w-[80%] md:w-[45%] text-center py-3 rounded-3xl`} href={'/servicos'}>Serviços</Link>
                        <Link className={`
                        text-xl sm:text-3xl font-bold bg-pink-300 w-[80%] md:w-[45%] text-center py-3 rounded-3xl`} href={'/servicos'}>Contato</Link>
                        </div>
                       
                    </div>

                </div>
                <div id='lkoko' className='bg-black/50 w-full inset-0 h-full absolute'>
                <Image 
                   style={{
                    objectFit:'cover',
                    zIndex:'-2'
                   }}
                   src={`/services/acompanhamento/img1.png`} fill={true} alt='bg'/>
                </div>
            </SwiperSlide>
       {result.map((servico)=>(
                <SwiperSlide className='w-full h-[80%]' key={servico.id}>
                   <CtaServico servico={servico} />
                </SwiperSlide>
             ))}
       
        </Swiper>
        
        </div>
    )
}