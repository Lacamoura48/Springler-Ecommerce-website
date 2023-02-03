import React, { useRef, useState } from 'react';
import {motion} from 'framer-motion'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';


function PhoneApp() {
  const [theEmail, setTheEmail] = useState('')
  
  const [done, setDone] = useState(false)
  const [eError, setEError] = useState(false)
  async function submitEmail(){
    const emailsRef = collection(db, "emails")
    
    if(theEmail != '' && theEmail.includes('.')){
      await addDoc(emailsRef, {email : theEmail})
      setDone(true)
      setEError(false)
    }else {
      setEError(true)
    }
    
  }

  return (
    <section className='md:px-40 md:py-32 py-20'>
    <div className='text-black flex seconde:flex-row seconde:gap-0 gap-28 flex-col  justify-center'>
          <div className='hidden md:block seconde:pr-12 seconde:border-r md:text-left text-center mx-auto'>
            <h1 className=' text-2xl md:text-4xl mb-4'>subscribe in our email for more surprises !</h1>
            <p className='text-gray-400 mb-12 text-lg'>subscribe to the newsletter and get all news about new arrivals, sales, and even cupons  !</p>
            <div className="md:w-96 relative ">

          <img
            className={`md:w-6 w-5 absolute md:top-4 md:left-3 top-1 left-8 ${done && 'hidden'}`}
            src="/icons/mail-icon-black.svg"
            alt=""
          />
          <input
            className={`${done && 'hidden'} z-30 h-14 w-full transition-all pl-12 md:pr-20 appearance-none  rounded-full py-3 md:text-lg text-md focus:outline-none bg-[#d9d9d927] border-gray-200 text-black focus:bg-[#d9d9d941] placeholder:text-gray-400 hover:bg-[#d9d9d941] focus:border-none`}
            id="inline-full-name"
            type="email"
            placeholder="Enter your email adress"
            value={theEmail}
            onChange={(e)=> setTheEmail(e.target.value)}
          />
          <button onClick={submitEmail} className={`${done && 'hidden'} text-white bg-[#7D916C] hover:bg-[#677759] transition rounded-full absolute px-4 py-3 md:right-1 md:top-1 top-16 right-20`}>
            Subscribe
          </button>
          {eError &&<p className='text-red-500 z-30'>* email is invalid.</p>}
          <motion.div  animate={{width : done ? 56 : 384, backgroundColor : done ? '#ebebeb': 'white', position: 'absolute', display :done ? 'block': 'none'}} transition={{duration : 0.5}} className={`${!done && 'hidden'} h-14  appearance-none  rounded-full md:text-lg text-md focus:outline-none bg-[#d9d9d927] border-gray-200 text-black focus:bg-[#d9d9d941] placeholder:text-gray-400 hover:bg-[#d9d9d941] focus:border-none`}></motion.div>
          <motion.img className='w-7 left-4 top-3' src='/icons/check-mark-icon-green.svg' initial={{position : 'absolute'}} animate={{opacity : done ? 1 : 0}}/>
          {done && <motion.p className='absolute left-20 top-4 text-xl text-[#7D916C]' initial={{opacity : 0}} animate={{opacity :  1}}>Thank you !</motion.p>}
        </div>
        
            </div>
        <div className='flex md:justify-around px-3'>
     
            <div className='w-1/2'>
            <h1 className=' text-xl md:text-4xl mb-4'>Use our android app for a different shopping experience !</h1>
            <p className='text-gray-400 md:mb-20 mb-5 md:text-lg'>Now you can bookmark and buy your favorite plants on your phone . it’s available on Playstore !</p>
            <button className='text-white bg-[#7D916C] hover:bg-[#677759] transition text-md md:text-lg md:px-3 px-2 py-3'>
            Download for Android
          </button>
            </div>
            <div className='relative w-[150px] md:w-[252px] md:h-[495px] overflow-hidden' >
                <iframe scrolling='no' className='absolute -top-10' width="240px" height="550px" src="https://springler-lacamoura48.vercel.app/plants/1" frameBorder="0" loading='lazy'></iframe>
                <img className='w-[150px] md:w-[252px] absolute pointer-events-none' src="https://i.ibb.co/bWC9zF4/icon-smartphone-i-Phone.png" alt="" />
            </div>
          
            
          
            
        </div>
      
       
    </div>
    </section>
  )
}

export default PhoneApp