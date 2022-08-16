import React from 'react'
import HeroDiaporama from './HeroDiaporama'


function Hero() {
  return (
    <section className='min-h-screen w-full bg-[url(/images/background.jpg)] bg-cover bg-no-repeat bg-center relative z-10 flex items-center md:px-36 px-5 pt-20'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#394231] opacity-[0.65]'></div>
        <div className='z-10 flex justify-around w-full  items-center'>
            <div>
                <h1 className='seconde:text-6xl md:text-4xl text-5xl  mb-10'>
                Everyone ought to<br /> plant a tree in <br />their lifetime.
                </h1>
                <p className='text-xl 2xl:text-xl text-gray-300  mb-14'>The best time to plant a tree was 20 years ago. The second best time is now.<br/> We have a collection of all kinds of plants, visit our shop and pick up yours !</p>
                <button className=" transition hover:bg-[#d9d9d948] text-white py-3 px-6 rounded-full text-[20px] border-[0.5px]">View plants</button>
            </div>
            <div>
              <HeroDiaporama />
            </div>
            
        </div>
    </section>
  )
}

export default Hero