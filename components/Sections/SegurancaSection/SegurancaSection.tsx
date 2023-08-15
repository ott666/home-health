import Container from '@/components/components/Container'
import React from 'react'

export default function SegurancaSection(){
    return(
        

       

       <>
    <Container>
        <div id='wrap' className={`
        flex flex-col md:flex-row
        w-full pt-5
        `}>
        <div id='esquerda' className={`
       
        w-full 
        h-fit
        lg:px-5`}>
            <div id='cardSeguranca' className={`
            flex flex-col items-start justify-between
            
            rounded-[50px]
            h-[fit]
            pb-5 pt-3
            bg-cyan-400 
            px-5
            w-full`
            
            
            }>
                <h1 className={`
                text-3xl text-center lg:text-4xl lg:whitespace-nowrap
                pb-2 
                
                font-bold`}>Segurança e qualidade</h1>
                <p className={`
                text-xl font-semibold
                text-justify`}>A Home Health Ribeirão é uma empresa de assistência domiciliar, que oferece serviços para auxiliar nos cuidados de quem você ama.</p>
            </div>
            
        </div>

        <div id='direita' className={`
        w-full 
        text-black
        px-5 
        h-fit`}>
            <p className='text-lg lg:text-xl font-semibold pt-3'>Operamos através de franqueados de propriedade e operação independentes. Por esse motivo, a segurança e o bem-estar de nossos pacientes são a prioridade em nossos serviços.</p>
            <ul className='list-disc pl-6 text-[16px] pt-3 gap-y-2 font-bolder flex flex-col'>
            <li>Acompanhamento hospitalar</li>
            <li>Procedimentos, Medicação e Coleta de Exames</li>
            <li>Locação e Venda de Equipamentos</li>
            </ul>
            <p className='text-[16px] pt-3 italic'>{`"Cuidamos bem porque existe amor no que fazemos."`}</p>

        </div>

        </div>
    </Container>
       </>

       
   
        
    )
}