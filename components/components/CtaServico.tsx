import React from 'react'
import { ArrayTypeNode } from 'typescript'
import Image from 'next/image'
import Link from 'next/link'

export default function CtaServico(props:any){
    return(

        <>
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
                        font-bold`}>{props.servico.ctaTitle}</h1>
                        <p className='text-justify text-lg sm:text-2xl md:text-2xl 3xl:text-3xl font-bolder 3xl:font-bold'>{props.servico.ctaTexto}</p>
                        <div className='flex flex-col sm:flex-row w-full justify-center  gap-3 items-center'>
                        <Link className={`
                        text-xl self-center sm:text-3xl font-bold bg-pink-300 w-[80%] md:w-[100%] text-center py-3 3xl:py-5 rounded-3xl`} href={'/servicos'}>Saiba mais</Link>
                        
                        </div>
                       
                    </div>

                </div>
                <div id='lkoko' className='bg-black/50 w-full inset-0 h-full absolute'>
                <Image 
                   style={{
                    objectFit:'cover',
                    zIndex:'-2'
                   }}
                   src={`/services/${props.servico.pastaFotos}/${props.servico.ctaBg}`} fill={true} alt='bg'/>
                </div>
        </>
        
    )
}