import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import {useDispatch} from 'react-redux'
import {cartActions, updateItemFromCart, deleteItemFromCart} from '../slices/cartSlice'



function CartItem({ item, variants}) {
  let [quantity, setQuantity]= useState(item.quantity);
  useEffect(()=>{
    setQuantity(item.quantity)
    dispatch(cartActions.SET_ITEM_QUANTITY({id : item.id , quantity : quantity}))

  },[item.quantity, quantity, dispatch])

  const dispatch = useDispatch()
  function reduceQuantity(){
    if(quantity <= 1){
      removeItem()
    }else {
      setQuantity(quantity -1)
    }
  }
  function increaseQuantity(){
   
      setQuantity(quantity+1)
  
    }
  
  function editQuantity(e){
      setQuantity(parseInt(e.target.value))
    
    }
  function removeItem(){
            dispatch(cartActions.REMOVE_CART_ITEM(item.id))


     
   

    }
  
  return (
    <motion.div variants={variants} className="flex w-full py-2 px-2 hover:bg-gray-50 rounded-md">
      <div className="flex flex-1">
        <img src={item.mainPic} className="md:w-32 w-32" alt="" />
        <div className="pl-2 md:pl-4 flex flex-col md:justify-around justify-start">
          <div>
            <h1 className="text-xl md:text-2xl  -mb-2">{item.title}</h1>
            <p className="text-lg text-gray-400">Plant</p>
            <p className="text-lg mb-5 text-[#b5c4a8] md:block hidden">{item.price}$</p>
          </div>

          <label htmlFor="quantity" className="md:block hidden">
            Quantity
            <button onClick={reduceQuantity} className="bg-gray-50 focus:outline-none py-1 w-8 ml-2 border-r-gray-200 border-r   hover:bg-gray-200">
              -
            </button>
            <input
              max="99"
              type="number"
              className="bg-gray-50 focus:outline-none py-1 px-2 w-10 text-center"
              value={quantity}
              onBlur={editQuantity}
              
            />
            <button onClick={increaseQuantity} className="bg-gray-50 focus:outline-none py-1 w-8 border-l-gray-200 border-l  hover:bg-gray-200">
              +
            </button>
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button onClick={removeItem} className="transition hover:bg-[#7c7c7c2c] p-3 rounded-sm"><img src="/icons/trash-icon-black.svg" className="w-7" alt="" /></button>
        <p className="ml-10 font-semibold text-lg">total : {item.total} $</p>
        
      </div>
     
    </motion.div>
  );
}

export default CartItem;
