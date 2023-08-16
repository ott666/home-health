import {ReactNode} from 'react'

type Props={
    children: ReactNode
}


export const Container2 = ({children}:Props) => {
  return (
    <div className={`
    
        mx-1
    3xl:mx-36
    
    `}>

        {children}

    </div>
  )
}
