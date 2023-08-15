import Container from '@/components/components/Container'
import React from 'react'
import Servicos from '@/data/servicos.json'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicosSection(){
    return(
    <section className='py-5'>
        <Container>
            <h1 className='text-center text-4xl  font-bold lg:text-6xl pb-5 text-black'>Nossos serviços</h1>
            <div className='flex w-full flex-wrap justify-between h-[fit]  py-5 gap-y-7  bg-transparent'>
            {Servicos.map((servico)=>(
                
               <Link href={`/servicos/${servico.pseudo}`} key={servico.id} className='flex gap-2 text-black bg- lg:transparent lg:h-[130px] w-full h-fit lg:w-[33%] ' >
                <div id='img' className='relative w-[72px] h-[72px] overflow-hidden bg-white flex items-center justify-center rounded-full border-4 border-pink-600'>
                    <Image src={`/icons/${servico.pseudo}.svg`} alt='img' width={500} height={500}/>
                </div>
                <div className='w-[80%] flex flex-col'>

                <h1 className='text-[18px]  pb-3 font-bold'>{servico.title}</h1>
                <p className='text-sm'>{servico.textCard}</p>

                </div>
               </Link>
            ))}
            </div>
        </Container>        
    </section>
        )

}