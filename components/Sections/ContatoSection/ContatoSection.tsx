import React from 'react'

export default function ContatoSection(){
    return(
        <section className='flex w-full py-5'>
            <div className={`
            flex flex-col 
        w-full 
            items-center 
            justify-center`}>
            <h1 className='text-black text-6xl py-5 font-bold'>Contato</h1>
            <p className='text-black text-2xl'>Abaixo você encontra todas as nossas informações de contato</p>
            </div>
        </section>
        )
}