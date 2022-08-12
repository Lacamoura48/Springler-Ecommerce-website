import React from 'react'

function CustomInput({scrolled = true}) {
  return (
    <div className="w-80 relative">
          <img
            className="w-6 absolute top-3 left-3"
            src={scrolled ? "/icons/search-icon-black.svg":"/icons/search-icon.svg"}
            alt=""
          />
          <input
            className={`h-12 w-full transition-all pl-12 pr-20 appearance-none  rounded-full py-2 px-4  leading-tight focus:outline-none bg-[#d9d9d927] border-gray-200 ${scrolled ? 'text-black':'text-white'} focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:border-none`}
            id="inline-full-name"
            type="text"
            placeholder="Search"
          />
          <button className={` ${scrolled ? 'text-gray-700 bg-[#bcbcbc41] hover:bg-[#aaaaaa48]': 'text-white bg-[#d9d9d941] hover:bg-[#d9d9d948]'} py-2 px-3 rounded-full absolute right-1 top-1 text-[15px]`}>
            Search
          </button>
        </div>
  )
}

export default CustomInput