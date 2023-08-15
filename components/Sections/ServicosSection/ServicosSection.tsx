import Container from '@/components/components/Container'
import React from 'react'
import Servicos from '@/data/servicos.json'
import Image from 'next/image'

export default function ServicosSection(){
    return(
    <section className='py-5'>
        <Container>
            <h1 className='text-center text-6xl pb-5 text-black'>Nossos serviços</h1>
            <div className='flex w-full flex-wrap justify-between h-[1000px] bg-red-600'>
            {Servicos.map((servico)=>(
                
               <div key={servico.id} className='flex bg-purple-300 h-[200px] w-[33%] ' >
                <div id='img' className='relative w-[90px] h-[90px] bg-yellow-200 flex items-center justify-center rounded-full border-4 border-black'>
                    <Image src={`/icons/${servico.pseudo}.svg`} alt='img' width={72} height={72}/>
                </div>
               </div>
            ))}
            </div>
        </Container>        
    </section>
        )

}