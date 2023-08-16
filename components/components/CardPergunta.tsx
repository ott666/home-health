import React from "react";
import  QuestionIcon  from "@/components/components/Icon";

interface CardPerguntaProps{
    pergunta:PerguntaProps

}

interface PerguntaProps{
    id:string
    title:string
    text:string
}

export default function CardPergunta(props:CardPerguntaProps){
    return(
        <div id='cardPergunta'
        className={`
        w-full 
        h-fit
        flex flex-row
        gap-2
        `}>
            <div className="w-[40px] h-[40px] rounded-full border-4 border-black flex justify-center items-center bg-red-300">
            <QuestionIcon width={40} height={40}/>
            </div>
            <div className={`flex flex-col gap-3 `}>

            <h2 className="text-xl font-semibold">
                {props.pergunta.title}
            </h2>
            <p className="text-lg text-justify">
                {props.pergunta.text}
            </p>
            </div>
        </div>
    )
}