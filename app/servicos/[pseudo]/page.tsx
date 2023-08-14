'use client'
import React from 'react'
import Container from '@/components/components/Container'
import Image from 'next/image'
import Servicos from '@/data/servicos.json'
import ContentServico from '@/components/components/ContentServico'

export default function Page({params}:any){
    const servico = Servicos.find(({ pseudo }) =>  pseudo === params.pseudo)
    return(
        <>
        <div className={`
        h-[55vh]
        bg-pink-700`}>Breadcrumb</div>
        <Container>
        <ContentServico servico={servico}/>
        </Container>
        </>
    )
 }