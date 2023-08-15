import React from 'react'
import Image from 'next/image'

export default function ContentServico(props:any){
    const servico = props.servico
 
 
    return(
        <>
        <div id='wrap_Row1' className={`
        flex flex-col  xl:flex-row xl:justify-between
        pt-5 xl:py-5
        

        `}>
            <div id='imagem' className={`
            w-full xl:w-[48%] relative 
            flex justify-center py-5 xl:py-2
            rounded-2xl
           
            `}>
                <Image className='rounded-2xl'
                src={`/services/${servico.pastaFotos}/img1.png`} width={1000} height={1000}
                 alt='bg'/>
                
            </div>
            <div id='direita' className={`
            flex flex-col xl:w-[50%] py-3
            
            `}>
           <h1 className={'text-3xl font-bold bg-pink-600 py-5 rounded-2xl text-center mb-2'}>{servico.title}</h1>
            {servico.p1s.map((element:any, i:number)=>(
                <p key={`{p1-${servico.pseudo}-${i}}`} className={`text-xl text-justify text-black`}>{element}</p>
            ))}
            </div>

        </div>
        <div id='wrap_Row2' className={`
        flex flex-col xl:flex-row xl:justify-between
        `}>
        <div id='esquerda2'className={'flex flex-col w-full gap-y-5'}>
            {servico.uls.map((ul:any)=>(
                <div key={ul.id} className='bg-pink-300 rounded-3xl'>
                    <ul  className='text-black flex flex-col text-2xl py-2 px-2 '>{ul.id}
                        {ul.lis.map((li:any, i:number)=>(
                            <li key={`li-${li.id}-${i}`} className='text-xl list-disc ml-5'>{li}</li>
                        ))}
                        </ul>
                </div>
            ))}
        </div>
        <div id='direita2'></div>
        </div>


        
        </>
    )
}