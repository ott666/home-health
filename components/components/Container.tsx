import {ReactNode} from 'react'
type Props={
    children: ReactNode
}

export default function Container({children}:Props){
    return(
        <div className={`
        w-full h-full mx-auto
        max-w-[600px] 
        sm:max-w-[900px] 
        md:max-w-[1000px]  
        lg:max-w-[1240px] 
        xl:max-w-[1300px] 
        3xl:max-w-[1500px]

        `}>
           {children} 
        </div>
    )
}