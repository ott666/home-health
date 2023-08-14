import React from 'react'
import { motion } from "framer-motion"



const TransitionEffect = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-yellow-500'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    transition={{duration:0.8, ease:'easeInOut'}} />

    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-red-600'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    transition={{duration:0.8, delay:0.2, ease:'easeInOut'}} />

    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-orange-600'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    transition={{duration:0.8, delay:0.4, ease:'easeInOut'}} />
    

    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-primaryBlue'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    transition={{duration:.7, delay:0.6, ease:'easeInOut'}} />
    
    </>
  )
}

export default TransitionEffect