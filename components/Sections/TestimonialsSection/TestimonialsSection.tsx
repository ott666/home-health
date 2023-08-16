import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonials from '@/components/components/Testimonials';
import TestimonialsData from '@/data/testimonials.json'
import Container from '@/components/components/Container';
import Image from 'next/image';

export default function TestimonialsSection(){
    return(
    <section className='h-[30vh]'>

        <Swiper className={`
        h-full
        w-full 
        flex justify-center items-center
        `}>
            {TestimonialsData.map((testimonial)=>(
                <SwiperSlide className='text-white  w-full h-full  relative'>
                   <div className='w-full h-full relative bg-black/30 z-2'>
                    <Image style={{objectFit:'cover', objectPosition:'top', zIndex:'-1'}} src={testimonial.img} fill={true} alt='testimonial'/>
                    
                    <Container>
                        <div className='flex items-center h-full bg-blue-300/20 justify-center w-full'>
                        <div className='flex w-[70%] flex-col h-full bg-orange-400/20 gap-5 items-center justify-center px-10'>
                        <h1 className='text-2xl z-3'>{testimonial.name}</h1>
                        <p className='text-xl italic font-bolder z-3'>{testimonial.text}</p>
    
                        </div>
    
                        </div>
                    </Container>
                </div>
                </SwiperSlide>
            ))}
    </Swiper>        
    </section>


    )
}