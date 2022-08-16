import React from 'react'
import CartItem from './CartItem'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {motion} from "framer-motion"

function Cart({setShow}) {
    const cartItems = useSelector(state => state.cart.cartItems)
    const animeChildren = {
      hidden : {opacity : 0 , y : -20},
      shown : {opacity : 1, y: 0, transition : {duration : 0.3}}
    }
    const animeParent = {
      hidden : {x : window.innerWidth/3},
      shown :{x : 0, transition : {delayChildren : 0.2, staggerChildren : 0.1 ,duration : 0.5, ease :'easeOut'}},
      exit : {x : window.innerWidth/3, transition :{ duration : 0.5, ease :'easeOut'}}
    }

  return (
    <motion.div variants={animeParent} initial="hidden" animate="shown" exit="exit"  className="fixed z-50 text-black bg-white top-0 right-0 min-h-screen shadow-lg pt-5 px-10">
          <button onClick={setShow} className={`w-16 h-16  p-3 transition hover:bg-[#7c7c7c2c]`}>
            <img className="w-20" src='/icons/remove-icon-black.svg' alt="" />
          </button>
          
          <div  className={`text-black flex flex-col w-full pt-10 ${cartItems.length > 3 && 'overflow-y-scroll' }  h-[65vh]`}>
            
            {cartItems.map(item=>{
               return (<CartItem variants={animeChildren} initial="hidden" animate="shown" item={item} key={item.id}/>)
            })}
          </div>

          </motion.div>
  )
}

export default Cart