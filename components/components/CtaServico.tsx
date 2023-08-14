import React from 'react'
import { ArrayTypeNode } from 'typescript'



export default function CtaServico(props:any){
    console.log(props.servico.title,'aquii')
    return(
        <div className='text-black'>{props.servico.title}</div>
    )

}