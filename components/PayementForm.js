import React from 'react'

function PayementForm() {
    
  return (
    <form action="" className=''>
    <h1 className='text-3xl mb-20'>
        Shipping Details
    </h1>
    <div className='flex gap-4 mb-6'>
        <div className='flex flex-col  w-full'>
            <label >First</label>
            <input className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} type="text" name="f-name" />
        </div>
        <div className='flex flex-col  w-full'>
            <label >Last</label>
            <input className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} type="text" name="l-name" />
        </div>
    </div>
    <div className='flex flex-col mb-6'>
        <label >Street</label>
        <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} name="address" />
    </div>
    <div className='flex gap-4 mb-16'>
        <div className='flex flex-col'>
            <label >City</label>
            <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} name="city" />
        </div>
        <div className='flex flex-col'>
            <label >State</label>
            <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} name="state" />
        </div>
        <div className='flex flex-col'>
            <label >Zip</label>
            <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} name="zip" />
        </div>
    </div>
  

    <div>
    </div>
    </form>
  )
}

export default PayementForm