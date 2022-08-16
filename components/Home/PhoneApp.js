import React from 'react';
import {motion} from 'framer-motion'

function PhoneApp() {
    const parentVariants ={
       hidden :{ opacity : 0},
       shown : { opacity : 1, transition : {staggerChildren : 0.3, delayChildren : 0.3}}
    }
    const childrenVariantsL = {
        hidden : {opacity : 0, x : -100},
        shown : {opacity : 1, x : 0 , transition : {duration : 0.4, delay: 0.3}}}
        
    
    const childrenVariantsR = {
        hidden : {opacity : 0, x : 100},
        shown : {opacity : 1, x : 0 , transition : {duration : 0.4, delay: 0.3}}
    }
  return (
    <section>
    <div className='text-black flex seconde:flex-row seconde:gap-0 gap-20 flex-col md:px-40 md:py-32 py-20 justify-center'>
          <motion.div variants={childrenVariantsL} initial="hidden" whileInView="shown" className=' seconde:pr-12 seconde:border-r md:text-left text-center mx-auto'>
            <h1 className=' text-2xl md:text-4xl mb-4'>subscribe in our email for more surprises !</h1>
            <p className='text-gray-400 mb-12 text-lg'>subscribe to the newsletter and get all news about new arrivals, sales, and even cupons  !</p>
            <form className="w-96 relative ">
          <img
            className="w-6 absolute top-4 left-3"
            src="/icons/mail-icon-black.svg"
            alt=""
          />
          <input
            className={`h-14 w-full transition-all pl-12 pr-20 appearance-none  rounded-full py-1 px-4 text-lg leading-tight focus:outline-none bg-[#d9d9d927] border-gray-200 text-black focus:bg-[#d9d9d941] placeholder:text-gray-400 hover:bg-[#d9d9d941] focus:border-none`}
            id="inline-full-name"
            type="email"
            placeholder="Enter your email adress"
          />
          <button type='submit' className='text-white bg-[#7D916C] hover:bg-[#677759] transition rounded-full absolute px-4 py-3 right-1 top-1'>
            Subscribe
          </button>
        </form>
            </motion.div>
        <motion.div variants={childrenVariantsR} initial="hidden" whileInView="shown" className='flex gap-5 pl-12 md:justify-around'>
     
            <div className='w-1/2'>
            <h1 className='text-xl md:text-4xl mb-4'>Use our android app for a different shopping experience !</h1>
            <p className='text-gray-400 mb-20 md:text-lg'>Now you can bookmark and buy your favorite plants on your phone . it’s available on Playstore !</p>
            <button className='text-white bg-[#7D916C] hover:bg-[#677759] transition text-lg px-3 py-3'>
            Download for Androind
          </button>
            </div>
            <div  >
                <img className='w-[150px] md:w-[252px]' src="/images/phone.png" alt="" />
            </div>
          
            
          
            
        </motion.div>
      
       
    </div>
    </section>
  )
}

export default PhoneApp