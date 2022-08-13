import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {cartActions} from '../slices/cartSlice';
import { useDispatch } from "react-redux";







function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const changeBackground = () => {
    
    if (window.scrollY >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    
    
   
    window.addEventListener("scroll", changeBackground)
    changeBackground()
  })
  const dispatch = useDispatch()


  return (
    <nav className={`flex  items-center justify-between px-48 fixed top-0 w-full z-20 ${scrolled && 'bg-[#ffffff] shadow-md'} transition-all`}>
      
      <div className="flex items-center">
        {scrolled ? (<img className="w-36 pt-2 mr-16" src="/logoTwo.svg" alt="" />) : (<img className="w-36 pt-2 mr-16" src="/logo.svg" alt="" />)}
        <ul className="flex gap-10 text-[18px]">
          <li className={`relative group ${scrolled && 'text-black'}`}>
            <Link href="/">Home</Link>
            <span className={`w-0 h-[2px] ${scrolled ? 'bg-black' : 'bg-white'} absolute top-7 left-0 group-hover:w-1/2 transition-all`}></span>
          </li>
          <li className={`relative group ${scrolled && 'text-black'}`}>
            <Link href="/">plants</Link>
            <span className={`w-0 h-[2px] ${scrolled ? 'bg-black' : 'bg-white'} absolute top-7 left-0 group-hover:w-1/2 transition-all`}></span>
          </li>
          <li className={`relative group ${scrolled && 'text-black'}`}>
            <Link href="/">about</Link>
            <span className={`w-0 h-[2px] ${scrolled ? 'bg-black' : 'bg-white'} absolute top-7 left-0 group-hover:w-1/2 transition-all`}></span>
          </li>
        </ul>
      </div>

      <div className="flex gap-5 items-center">
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
          <button className={` ${scrolled ? 'text-gray-700 bg-[#bcbcbc41] hover:bg-[#aaaaaa48]': 'text-white bg-[#d9d9d941] hover:bg-[#d9d9d948]'} py-2 px-3 rounded-full absolute right-1 top-1 text-[15px] cursor-pointer`}>
            Search
          </button>
        </div>
        <div className={`w-11 h-11 ml-5 border-[0.7px] rounded-full p-3 ${scrolled ?'hover:bg-[#7c7c7c2c]':'hover:bg-[#ffffff2c]'} transition cursor-pointer`}>
          <img className="w-7" src={scrolled ? '/icons/user-icon-black.svg' : "/icons/user-icon.svg"} alt="" />
        </div>
        <div className="relative">
          
          <div onClick={()=> dispatch(cartActions.showCart())} className={`w-11 h-11 border-[0.7px] rounded-full p-3 transition ${scrolled ?'hover:bg-[#7c7c7c2c]':'hover:bg-[#ffffff2c]'} cursor-pointer`}>
            <img className="w-7" src={scrolled ? '/icons/cart-icon-black.svg' : "/icons/cart-icon.svg"} alt="" />
          </div>

          
        </div>
      
      </div>
    </nav>
  );
}

export default Navbar;
