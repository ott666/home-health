import Container from "@/components/components/Container";
import React from "react";
import Perguntas from "@/data/perguntas.json"
import CardPergunta from "@/components/components/CardPergunta";

export default function PerguntasSection(){
    return(
        <section className={`
        h-[80vh] text-black py-5`}>
            
        <Container>
            <h1 className={`text-6xl text-center font-bold py-10`}>Perguntas frequentes</h1>
            <div id="wrapper"
            className={`
            flex flex-wrap 
            justify-between items-start
            gap-y-5
            w-full
            `}>
                {Perguntas.map((pergunta)=>(
                    <div key={pergunta.id} className="w-full lg:w-[48%]">
                    <CardPergunta pergunta={pergunta}/>
                    </div>
                ))}
            
                
            </div>
        </Container>
 
        </section>
    )
}