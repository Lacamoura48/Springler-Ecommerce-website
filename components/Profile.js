import React from 'react'
import CartItem from './CartItem'
import {motion} from "framer-motion"
import Link from 'next/link'


function Cart({setShow}) {
    
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
    <motion.div variants={animeParent} initial="hidden" animate="shown" exit="exit"  className="fixed w-full seconde:w-[470px] z-50 text-black bg-white top-0 right-0 min-h-screen shadow-lg pt-5  px-5 md:px-10">
          <button onClick={setShow} className={`w-16 h-16  p-3 transition hover:bg-[#7c7c7c2c]`}>
            <img className="w-20" src='/icons/remove-icon-black.svg' alt="" />
          </button>
          
          <div  className={`text-black flex flex-col w-full pt-8 h-[65vh] gap-10`}>
            <div className='flex flex-col justify-center items-center gap-2 bg-gray-50 py-5 rounded-lg'>
              <img  src="/icons/user-icon-black.svg" className='w-28 border-2 border-black rounded-full p-3' alt="" />
              <p className='text-xl font-semibold'>Anas Sghir</p>
              <p className='text-lg text-gray-400'>Balance : 0 $</p>
            </div>
            <div className='px-5 text-xl flex flex-col'>
                         <Link href="/"><button className='hover:bg-gray-100 hover:text-[#7D916C] px-4 py-2 rounded-md flex items-center gap-3'><img src="/icons/settings-icon-black.svg" alt="" /> Profile settings</button></Link>
                         <Link href="/"><button className='hover:bg-gray-100 hover:text-[#7D916C] px-4 py-2 rounded-md flex items-center gap-3'><img src="/icons/heart-icon-black.svg" alt="" /> Wishlist</button></Link>
                         <Link href="/"><button className='hover:bg-gray-100 hover:text-[#7D916C] px-4 py-2 rounded-md flex items-center gap-3'><img src="/icons/cartt-icon-black.svg" alt="" /> Checkout</button></Link>
                         <Link href="/"><button className='hover:bg-gray-100 hover:text-[#7D916C] px-4 py-2 rounded-md flex items-center gap-3'><img src="/icons/live-chat-icon-black.svg" alt="" /> Contact us</button></Link>

                         <Link href="/"><button className='hover:bg-red-600 border  border-red-600 mt-10 text-red-600 hover:text-white transition px-4 py-2 rounded-md '>Disconnect</button></Link>

            </div>
            <Link href="/"><p className='absolute bottom-10 right-10 underline text-lg text-gray-500 cursor-pointer'> Report a bug</p></Link>
          </div>

          </motion.div>
  )
}

export default Cart