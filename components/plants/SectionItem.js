import React from 'react'

function SectionItem() {
  return (
    <div className='w-1/3 p-5 transition  text-black flex flex-col hover:bg-gray-50'>
        <img src="/images/plant_1.png" alt="" />
        <div className='flex justify-between items-center'>
            <div>
            <h1 className='text-xl -mb-2 '>Susie</h1>
         <p className='text-md text-gray-400'>Plant</p>
        </div>
        <p className='text-md text-white px-2 py-3 bg-[#7D916C]'>14.99$</p>
        </div>
        <div className='flex gap-5 mt-16'>
            <button className="flex-auto transition  hover:bg-[#7D916C] text-[#7D916C] hover:text-white border border-[#7D916C] py-2 text-[16px]">Add to cart</button>
            <div className=' rounded-full p-2 transition hover:bg-[#7c7c7c2c] cursor-pointer'>
            <img className="w-7" src='/icons/heart-icon-black.svg' alt="" />
          </div>
        </div>

        
    </div>
  )
}

export default SectionItem