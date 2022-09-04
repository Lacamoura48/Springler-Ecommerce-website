import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import {useSelector, useDispatch} from 'react-redux'
import {motion} from "framer-motion"
import { cartActions } from '../slices/cartSlice'
import Link from 'next/link'



function Cart({setShow}) {
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
    const userConnected = useSelector(state => state.user.connected)
  const cartItems = useSelector(state => state.cart.cartItems)
 useEffect(()=>{
    dispatch(cartActions.GET_CART_ITEMS())
 }, [])
  

  

  useEffect(()=>{
    if(cartItems[0]){
      console.log(cartItems)
      const eachTotal = cartItems.map((iteme) => parseInt(iteme.quantity) * parseFloat(iteme.price))
      setTotal(eachTotal.reduce((a,b)=> a+b))
    }
    
  },[cartItems])
 
  
 


   
    const animeChildren = {
      hidden : {opacity : 0 , y : -20},
      shown : {opacity : 1, y: 0, transition : {duration : 0.3}}
    }
    
    const animeParent = {
      hidden : {x : window.innerWidth/3},
      shown :{x : 0, transition : {delayChildren : 0.2, staggerChildren : 0.1 ,duration : 0.5, ease :'easeOut'}},
      exit : {x : window.innerWidth/3, opacity: 0,  transition :{ duration : 0.5, ease :'easeOut'}}
    }

  return (
    <motion.div variants={animeParent} initial="hidden" animate="shown" exit="exit"  className="fixed w-full seconde:w-[570px] z-50 text-black bg-white top-0 right-0 min-h-screen shadow-lg pt-5 px-5 md:px-8">
          <button onClick={setShow} className={`w-16 h-16  p-3 transition hover:bg-[#7c7c7c2c]`}>
            <img className="w-20" src='/icons/remove-icon-black.svg' alt="" />
          </button>
          
          <div  className={`text-black flex flex-col gap-5 w-full mt-8 ${cartItems && cartItems.length > 3 && 'overflow-y-scroll' }  h-[65vh]`}>
            
            {cartItems.length ? cartItems.map(item=>{
               return (<CartItem variants={animeChildren} initial="hidden" animate="shown" item={item} key={item.id}/>)
            }) : <div onClick={setShow} className='text-gray-500 h-full flex flex-col gap-10 justify-center items-center text-3xl text-center'>You still haven&apos;t added anything to the cart yet :&apos;( <Link href="/plants"><button className="md:px-10 md:rounded-md transition  bg-[#7D916C] hover:bg-[#6e805e] text-white border border-[#7D916C] py-5 text-[18px]">
            View the plants 
          </button></Link></div> }
          </div>
         {cartItems.length ? ( <div className='mt-3 flex justify-between items-center p-3 rounded-md bg-gray-50 '>
            <Link href={{pathname : userConnected ? '/checkout' : '/login'}}><button onClick={setShow} className='px-6 py-4 bg-[#7D916C] text-white md:text-[18px] text-[16px]'>Check out</button></Link>
            <p className='text-black font-semibold md:text-[20px] text-[17px]'>TOTAL : {total.toFixed(2)}$</p>
          </div>): ''}
          </motion.div>
  )
}

export default Cart