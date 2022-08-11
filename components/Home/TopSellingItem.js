import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

function TopSellingItem({title, subTitle, price, src, description = "...", id}) {


  return (
    <motion.div whileHover={{scale : 1.02}} className='text-black p-5 w-[350px] h-full flex flex-col'>  
        <img src={src} alt="" className='w-full mb-5'/>
        <h1 className='text-4xl -mb-1'>{title}</h1>
        <span className='text-2xl text-[#7D916C] mb-5'>{subTitle}</span>
        <p className='mb-16 text-[#9B9B9B]'>{description}</p>
        <button className="transition hover:bg-[#657457] hover:text-white border-[#7D916C] border text-[#7D916C] text-white py-3 px-6 text-[18px] yoyo"><Link href={{ pathname: '/plants/[id]',query: { id: id }}}>{`Buy for ${price}`}</Link></button>
        
       
    </motion.div>
  )
}

export default TopSellingItem