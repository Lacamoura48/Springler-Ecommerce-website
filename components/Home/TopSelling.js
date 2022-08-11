import React from 'react'
import TopSellingItem from './TopSellingItem'

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
          { id:3,
            src : "images/plant_2.png",
            style : 'w-[470px] absolute -top-20 -left-20 z-40',
            title : "Lola",
            price : "29.99$"}
      ]

  return (
    <section className='min-h-screen  px-40 pt-36'>
        <h1 className='text-black text-4xl'>Top selling</h1>
        {plants.map(item=>{
            return (<TopSellingItem title={item.title} subTitle={"snake"} price={item.price} src={item.src} description={"..."} key={item.id}/>)
        })}
    </section>
  )
}

export default TopSelling