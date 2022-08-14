import React from 'react'

function FiltersSection() {
  return (
    <div className=' text-[#7f7f7f] justify-around flex-1 '>
       
        <div className='p-10 border rounded-md'>
        <div className=' pt-4 pb-10 '>
             <h1 className='text-black text-3xl'>Shop</h1>
            <p className='text-[#7D916C] text-2xl'>filters</p>
        </div>
        
        <div className="w-full relative mb-16">
        
        
        <input
          className='h-12 w-full transition-all pr-20 appearance-none  rounded-md py-2 px-4  leading-tight focus:outline-none bg-[#d9d9d927] border-gray-200 text-lg text-black focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:border-none'
          id="inline-full-name"
          type="text"
          placeholder="Search"
        />
        <button className=' bg-[#bcbcbc41] hover:bg-[#aaaaaa48] py-3 px-3 rounded-md absolute right-0 top-0'>
        <img
          className="w-6"
          src="/icons/search-icon-black.svg"
          alt=""
        />
        </button>
      </div>
      
        <div className='text-lg mb-10'>
            <p className='text-black text-xl mb-5 font-normal'>Categories</p>
            <div className='flex gap-4 items-center flex-wrap justify-evenly'>
                 <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something"/>
                <label htmlFor="something">Unkillable</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something2"/>
                <label htmlFor="something2">Snake plant</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something3"/>
                <label htmlFor="something3">Desert rose</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something4"/>
                <label htmlFor="something4">Cactus big</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something5"/>
                <label htmlFor="something5">somthing</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something6"/>
                <label htmlFor="something6">sosdfksd</label>
            </div>
            </div>
           
            
        </div>
        <div className='mb-16'>
            <p className='text-black text-xl mb-5 font-normal'>Price</p>
            <div className='flex gap-2 items-center justify-around'>
                <div className='text-lg'>
                    <label htmlFor="min" className='mr-3'>Min</label>
                    <input type="number" name="min" id="min"  className='bg-[#d9d9d927] focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:outline-none rounded-md h-10 w-24 px-2 text-lg'/>
                </div>
                 <div className='text-lg'>
                    <label htmlFor="max" className='mr-3'>Max</label>
                    <input type="number" name="max" id="max" className='bg-[#d9d9d927] focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:outline-none rounded-md h-10 w-24 px-2 text-lg'/>
                 </div>
                 
            </div>

           
            
        </div>
       
        <button className=" w-full font-normal transition hover:bg-[#657457] hover:text-white border-[#7D916C] border text-[#7D916C] text-white py-3 px-6 text-[18px] rounded-md">filter</button>

        </div>
    </div>
  )
}

export default FiltersSection