import React from 'react';
import {motion} from 'framer-motion'

function PhoneApp() {
    const parentVariants ={
       hidden :{ opacity : 0},
       shown : { opacity : 1, transition : {staggerChildren : 0.3, delayChildren : 0.3}}
    }
    const childrenVariantsL = {
        hidden : {opacity : 0, x : -100},
        shown : {opacity : 1, x : 0 , transition : {duration : 0.4}}}
        
    
    const childrenVariantsR = {
        hidden : {opacity : 0, x : 100},
        shown : {opacity : 1, x : 0 , transition : {duration : 0.4}}
    }
  return (
    <motion.div variants={parentVariants} initial="hidden" whileInView="shown" className='text-black flex justify-around items-center px-52 min-h-screen'>
          <motion.div variants={childrenVariantsL} className='px-12  flex-1 pb-10'>
            <h1 className='text-4xl mb-4'>subscribe in our email for more surprises !</h1>
            <p className='text-gray-400 mb-12 text-lg'>subscribe to the newsletter and get all news about new arrivals, sales, and even cupons  !</p>
            <form className="w-96 relative">
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
        <motion.div variants={childrenVariantsR} className='border-l flex px-14 items-center gap-10 flex-1'>
     
            <div>
            <h1 className='text-3xl mb-4'>Use our android app for a different shopping experience !</h1>
            <p className='text-gray-400 mb-20'>Now you can bookmark and buy your favorite plants on your phone . it’s available on Playstore !</p>
            <button className='text-white bg-[#7D916C] hover:bg-[#677759] transition text-lg px-4 py-4'>
            Download for Androind
          </button>
            </div>
            <img src="/images/phone.png" className='w-[245px]' alt="" />
            
          
            
        </motion.div>
      
       
    </motion.div>
  )
}

export default PhoneApp