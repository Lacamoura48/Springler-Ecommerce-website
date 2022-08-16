import React, { useTransition } from 'react'
import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"


function HeroDiaporama() {
  const plants = [
    {id : 0,
      src : "images/plant_cut_3.png",
      style : 'w-60 absolute -top-10 left-14 z-40 pointer-events-none	',
      title : "Susie",
      price : "15.99$"},
      
    
    { id:1,
      src : "images/plant_cut_4.png",
      style : 'w-[470px] absolute -top-20 -left-20 z-40 pointer-events-none	',
      title : "Pippa",
      price : "29.99$"}
  ]
  const variants = {
    enter: {
        x:  1000,
        opacity: 0
      },
   
    center: {
      
      x: 0,
      opacity: 1
    },
    exit:{
       
        x: -1000,
        opacity: 0
    }}

let [current, setCurrent] = useState(0);

function nextButton(){
  if(current == 1){
    setCurrent(0)
  }else {
    setCurrent(current+1)
  }

}
function previousButton(){
  if(current == 0){
    setCurrent(1)
  }else {
    setCurrent(current-1)
  }

}



  return (
    
    
    <div className='relative w-[600px] h-[600px] bg-white rounded-full z-20 mr-50 seconde:block hidden'>
        <motion.button  className='cursor-pointer w-24 absolute right-0 top-[260px] z-30'><img className='w-full' src="icons/arrow-icon.svg" alt="" onClick={nextButton}/></motion.button>
        <motion.button className='cursor-pointer w-24 absolute left-0 top-[260px] rotate-180 z-30'><img className='w-full' src="icons/arrow-icon.svg" alt="" onClick={previousButton}/></motion.button>
       <div className='absolute w-[500px] h-[500px] bg-white opacity-30 rounded-full -top-2 -right-3'></div>
       <div className='absolute w-[530px] h-[530px] bg-white opacity-30 rounded-full -bottom-3 -left-5'></div>
    {plants.map((item, index)=>{
        
           return <AnimatePresence  key={item.title}> {current === item.id && (<motion.img  initial={{opacity : 0, x: -120, y:0, scale: 0.5}} animate={{opacity : 1,x: 0, y:0, scale: 1}} exit={{opacity : 0,  x: 100, y:0, scale: 0.5}} transition={{duration: 0.8, ease: "anticipate"}}  className={item.style} src={item.src} alt=""/>)}</AnimatePresence>
    })}
     
       <span className='w-36 h-10 bg-[#00000080] absolute top-[430px] left-[120px] blur-xl z-30'></span>
       <div className='absolute right-28 top-[210px] text-black'>
       {plants.map((item, index)=>{
        
        return (current === item.id && <motion.h1 key={item.id} initial={{opacity : 0, x : -5}} animate={{opacity : 1, x : 0}} exit={{opacity : 0}} transition={{duration : 0.5, ease: "easeOut"}} className='text-5xl mb-1'>{item.title}</motion.h1>)
 })}
       
        <motion.p initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} transition={{duration : 2}} className='text-2xl text-[#737373] mb-12'>{plants[current].price}</motion.p>
       
        <Link href={{ pathname: '/plants/[id]',query: { id: '1' }}} ><button className="transition hover:bg-[#657457] bg-[#7D916C] text-white py-3 px-6 rounded-full text-[20px]">view details</button></Link>
      
       </div>
    
    </div>
   
  
   
  )
}

export default HeroDiaporama