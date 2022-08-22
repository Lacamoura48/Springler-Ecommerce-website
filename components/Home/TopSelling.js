import React, { useEffect, useState } from 'react'
import TopSellingItem from './TopSellingItem'
import {motion} from 'framer-motion'
import {useSelector, useDispatch} from 'react-redux'


function TopSelling() {

const [plants, setPlants] = useState([])
let storeItems = useSelector(state=> state.items.itemsItems)
useEffect(() => {
  if(storeItems){
      let topPlants = storeItems.slice(2,5);
      setPlants(topPlants)
  }
  
}, [storeItems])

    
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
            return (<motion.div variants={itemVar} key={index}><TopSellingItem  initial="hidden" animate="show" title={item.title} subTitle={item.type} price={item.price} src={item.mainPic} description={item.description} id={item.id}/></motion.div>)
        })}
        </motion.div>
        
    </section>
  )
}

export default TopSelling