import React, { Children } from 'react'
import TopSellingItem from './TopSellingItem'
import {motion} from 'framer-motion'

function TopSelling() {
    const plants = [
        {id : 0,
          src : "images/plant_3.png",
          style : 'w-60 absolute -top-10 left-14 z-40',
          title : "Susie",
          price : "15.99$"},
          
        
        { id:1,
          src : "images/plant_4.png",
          style : 'w-[470px] absolute -top-20 -left-20 z-40',
          title : "Pippa",
          price : "29.99$"},
          { id:6,
            src : "images/plant_2.png",
            style : 'w-[470px] absolute -top-20 -left-20 z-40',
            title : "Lola",
            price : "29.99$"}
      ]
      const variants ={
        hidden : { opacity : 0,},
        show : { opacity : 1, transition : {delayChildren : 0.2, staggerChildren : 0.1}}
         
     }
     const itemVar = {
        hidden : { opacity : 0, x : -30},
        show : { opacity : 1, x : 0, transition : {duration : 0.3}}
     }

  return (
    <section className='min-h-screen seconde:px-40 pt-24 px-20'>
        <h1 className='text-black text-4xl'>Top selling</h1>
        <motion.div variants={variants} initial="hidden" whileInView="show" className='flex justify-center items-start pt-14 gap-7 flex-wrap'>
            {plants.map((item, index)=>{
            return (<motion.div variants={itemVar} key={index}><TopSellingItem  initial="hidden" animate="show" title={item.title} subTitle={"snake"} price={item.price} src={item.src} description={"In the wild, you’ll find this plant growing primarily in Mexico and Guatemala, but it’s been beloved as an indoor plant around the world since Victorian times."} id={item.id}/></motion.div>)
        })}
        </motion.div>
        
    </section>
  )
}

export default TopSelling