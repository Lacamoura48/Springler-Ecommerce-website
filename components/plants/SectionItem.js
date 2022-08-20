import React from 'react'

function SectionItem() {
  return (
    <div className=' border-gray-200 md:border-none md:w-1/3 w-1/2 md:p-5 p-1 transition  text-black flex flex-col hover:bg-gray-50 cursor-pointer group'>
        <img src="https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1563812091/products/snake-plant-e0fb21.jpg" alt="" />
        <div className='flex justify-between items-center'>
            <div>
            <h1 className='text-lg md:text-2xl -mb-2 group-hover:text-[#7D916C] transition'>Susie</h1>
         <p className=' text-sm md:text-xl text-gray-400'>Plant</p>
        </div>
        <p className='md:text-xl text-sm text-white px-1 py-2 md:px-2 md:py-3 bg-[#7D916C]'>14.99$</p>
        </div>
        <div className='flex gap-5 mt-16 items-center'>
            <button className="flex-auto transition  hover:bg-[#7D916C] md:text-[#7D916C] text-white bg-[#7D916C] md:bg-white hover:text-white border md:border-[#7D916C]  py-2 text-[14px] md:text-[16px] ">Add to cart</button>
            <div className=' rounded-full md:p-2 transition hover:bg-[#7c7c7c2c] cursor-pointer'>
            <img className="w-6 md:w-7" src='/icons/heart-icon-black.svg' alt="" />
          </div>
        </div>

        
    </div>
  )
}

export default SectionItem