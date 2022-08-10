import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex pt-1  items-center justify-between px-36 fixed top-0 w-full z-20">
      <div className="flex items-center">
        <img className="w-36 pt-3 mr-16" src="/logo.svg" alt="" />
        <ul className="flex gap-10 text-[18px]">
          <li className="relative group">
            <Link href="/">Home</Link>
            <span className="w-0 h-[2px] bg-white absolute top-7 left-0 group-hover:w-1/2 transition-all"></span>
          </li>
          <li className="relative group">
            <Link href="/">plants</Link>
            <span className="w-0 h-[2px] bg-white absolute top-7 left-0 group-hover:w-1/2 transition-all"></span>
          </li>
          <li className="relative group">
            <Link href="/">about</Link>
            <span className="w-0 h-[2px] bg-white absolute top-7 left-0 group-hover:w-1/2 transition-all"></span>
          </li>
        </ul>
      </div>

      <div className="flex gap-5 items-center">
        <div className="w-80 relative">
          <img
            className="w-6 absolute top-3 left-3"
            src="/icons/search-icon.svg"
            alt=""
          />
          <input
            class="h-12 w-full transition-all pl-12 pr-20 bg-[#d9d9d927] appearance-none border-gray-200 rounded-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-[#d9d9d941] hover:bg-[#d9d9d941] focus:border-none"
            id="inline-full-name"
            type="text"
            placeholder="Search"
          />
          <button className="bg-[#d9d9d941] hover:bg-[#d9d9d948] text-white py-2 px-3 rounded-full absolute right-1 top-1 text-[15px]">
            Search
          </button>
        </div>
        <div className="w-11 h-11 ml-5 border-[0.7px] rounded-full p-3 hover:bg-[#ffffff2c] transition">
          <img className="w-7" src="/icons/user-icon.svg" alt="" />
        </div>
        <div className="w-11 h-11 border-[0.7px] rounded-full p-3 hover:bg-[#ffffff2c] transition">
          <img className="w-7" src="/icons/cart-icon.svg" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
