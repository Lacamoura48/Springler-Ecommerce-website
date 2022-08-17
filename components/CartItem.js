import React from "react";
import {motion} from "framer-motion"


function CartItem({ item, variants }) {
  return (
    <motion.div variants={variants} className="flex w-full py-2 px-2 hover:bg-gray-50 rounded-md">
      <div className="flex flex-1">
        <img src="images/plant_1.png" className="md:w-32 w-32" alt="" />
        <div className="pl-2 md:pl-4 flex flex-col md:justify-around justify-start">
          <div>
            <h1 className="text-xl md:text-2xl  -mb-2">{item.title}</h1>
            <p className="text-lg text-gray-400">Plant</p>
            <p className="text-lg mb-5 text-[#b5c4a8] md:block hidden">19.99$</p>
          </div>

          <label htmlFor="quantity" className="md:block hidden">
            Quantity
            <button className="bg-gray-50 focus:outline-none py-1 w-8 ml-2 border-r-gray-200 border-r   hover:bg-gray-200">
              -
            </button>
            <input
              max="99"
              type="number"
              className="bg-gray-50 focus:outline-none py-1 px-2 w-10 text-center"
              
            />
            <button className="bg-gray-50 focus:outline-none py-1 w-8 border-l-gray-200 border-l  hover:bg-gray-200">
              +
            </button>
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button className="transition hover:bg-[#7c7c7c2c] p-3 rounded-sm"><img src="icons/trash-icon-black.svg" className="w-7" alt="" /></button>
        <p className="ml-10 font-semibold text-lg">total : 19.99$</p>
        
      </div>
     
    </motion.div>
  );
}

export default CartItem;
