import React from 'react'
import Link from 'next/link'
import {useRef} from 'react'

function FiltersSection({takeFilters}) {
    
    const search = useRef()
    const minPrice = useRef()
    const maxPrice = useRef()
    const scc = useRef()
    const csp = useRef()
    const sp = useRef()
    const rce = useRef()
    const pl = useRef()


    function filter(){
        takeFilters({search : search.current.value, min : minPrice.current.value, max : maxPrice.current.value, scc : scc.current.checked, csp : csp.current.checked, sp : sp.current.checked, rce : rce.current.checked, pl :pl.current.checked})
    }

  return (
    <>
    <div className='seconde:hidden text-black  flex  text-xl px-1 text-md'>
        <div className='flex justify-between w-full'>
        <div className='flex bg-gray-100 py-2 px-4 gap-2 rounded-md cursor-pointer'>
        <img className='w-5 rotate-180' src="/icons/arrow-icon.svg" ></img>
            <Link href="/"> 
           
                <p>Back</p>
            </Link></div>
       
            <div className='flex bg-gray-100 py-2 px-4 gap-2 rounded-md cursor-pointer'>
                 <img className='w-5' src="/icons/filters-icon-black.svg" ></img>
                <p>Filter</p>
            </div>
          
        </div>
        
       
    </div>
    <div className=' text-[#7f7f7f] justify-around flex-1 seconde:block hidden'>
       
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
          ref={search}
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
            <div className='flex gap-4 items-center flex-wrap'>
                 <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something" ref={csp}/>
                <label htmlFor="something">Curly Spider Plant</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something2" ref={sp}/>
                <label htmlFor="something2">Snake plant</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something3" ref={pl}/>
                <label htmlFor="something3">Peace Lily</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something4" ref={scc}/>
                <label htmlFor="something4">Succulent</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="something5" ref={rce}/>
                <label htmlFor="something5">Red Chinese evergreen</label>
            </div>
        
            </div>
           
            
        </div>
        <div className='mb-16'>
            <p className='text-black text-xl mb-5 font-normal'>Price</p>
            <div className='flex gap-2 items-center justify-around'>
                <div className='text-lg'>
                    <label htmlFor="min" className='mr-3'>Min</label>
                    <input ref={minPrice} type="number" name="min" id="min"  className='bg-[#d9d9d927] focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:outline-none rounded-md h-10 w-24 px-2 text-lg'/>
                </div>
                 <div className='text-lg'>
                    <label htmlFor="max" className='mr-3'>Max</label>
                    <input ref={maxPrice} type="number" name="max" id="max" className='bg-[#d9d9d927] focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:outline-none rounded-md h-10 w-24 px-2 text-lg'/>
                 </div>
                 
            </div>

           
            
        </div>
       
        <button onClick={filter} className=" w-full font-normal transition hover:bg-[#657457] hover:text-white border-[#7D916C] border text-[#7D916C]  py-3 px-6 text-[18px] rounded-md">filter</button>

        </div>
    </div>
    </>
  )
}

export default FiltersSection