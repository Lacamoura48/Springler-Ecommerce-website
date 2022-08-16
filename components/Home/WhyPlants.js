import React from 'react'

function WhyPlants() {
  return (
    <section className='bg-[#6B7165] md:px-56 px-5 pb-16 relative overflow-hidden'>
            <img src="images/plant_svg.svg"  className='absolute -right-60 -bottom-60 w-1/2 opacity-20 hidden md:block' alt="" />

        <h1 className='text-3xl pt-16 mb-16 pl-28'>Why you should have a plant at home ?</h1>

        <div className='flex flex-col md:flex-row md:gap-0 gap-3 justify-around items-center'>
                <div className=' relative w-72 h-72 rounded-full'>
                <div className='absolute w-64 h-64 bg-black opacity-10 rounded-full -top-2 -right-2'></div>
            <div className='absolute w-64 h-64 bg-black opacity-10 rounded-full -bottom-2 -left-2'></div>
                <img className='absolute top-0 left-0 rounded-full' src="/images/plant_back_1.png" alt="" />
          

        </div>
        <p className='w-1/2 text-[18px] md:leading-10 text-gray-200 font-serif'>When you feel down, it’s amazing what a walk in the park can do. That’s because when we get in touch with nature, we improve our wellbeing. Studies show time spent outside in green spaces can reduce our mental fatigue, increase our relaxation, and even improve our cognition. Not only do indoor plants enhance the overall appearance of a space, but studies show they boost moods, increase creativity, reduce stress, and eliminate air pollutants—making for a healthier, happier you.</p>

    
    </div>
    </section>
  )
}

export default WhyPlants