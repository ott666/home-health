import React from 'react'
import {register} from 'swiper/element/bundle'
import {Swiper, SwiperSlide} from 'swiper/react'
import CtaServico from '@/components/components/CtaServico'
import Servicos from "@/data/servicos.json"

const servicosDestaque = ['acompanhamento', 'consulta-medica-domiciliar']



register()
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function HeroSection(){
    
    const result = Servicos.filter((servico)=>{
        return servicosDestaque.find((a)=>{
            return servico.pseudo === a
        })
    })
    
    
    return(
        <div>
            <h1 className='text-black'>oi</h1>

        <Swiper>

             {result.map((servico)=>(
                <SwiperSlide>
                    <CtaServico servico={servico}/>
                </SwiperSlide>
             ))}

        </Swiper>
        </div>
    )
}