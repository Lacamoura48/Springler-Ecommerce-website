import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {cartActions} from '../../slices/cartSlice'
import { doc, updateDoc } from 'firebase/firestore'
import {uiActions} from '../../slices/uiSlice'
import {userActions} from '../../slices/userSlice'
import { addLove, retrieveLove } from "../../slices/itemsSlice";
import { db } from '../../firebase-config'


function SectionItem({title, mainPic, type, price, id}) {

  const dispatch = useDispatch()
  const userConnected = useSelector(state => state.user.connected)
  const userUid = useSelector(state => state.user.user.docId)
  const userWish = useSelector(state => state.user.user.wishlist)
  const item = useSelector(state=> state.items.itemsItems).find((item)=> item.id == id)

    async function addToCart(event){
      event.stopPropagation()
      dispatch(cartActions.ADD_TO_CART({id : id, title : title, price : price, quantity : 1, total : price, mainPic : mainPic}))
      
    }
    async function addToWish(e){
      e.stopPropagation()
      if(userConnected){
        const itemRefrence = doc(db, 'users', userUid) 
        if(userWish.find((item)=> parseInt(item) == id)){
          dispatch(userActions.ADD_TO_WISH(id))
          await updateDoc(itemRefrence, {wishlist : userWish.filter((item)=> parseInt(item) != id)})
          await dispatch(retrieveLove(id, item.uid, item.loves))
        }else{
          dispatch(userActions.ADD_TO_WISH(id))
          await updateDoc(itemRefrence, {wishlist : [...userWish, id]})
          await dispatch(addLove(id, item.uid, item.loves))
    
        }
      } else {
        dispatch(uiActions.showProfile())
      }}
   
  
  return (
    <Link href={{pathname : '/plants/[id]', query : {id : id}}}>
    <div className=' border-gray-200 md:border-none md:w-1/3 w-1/2 md:p-5 p-1 transition  text-black flex flex-col hover:bg-gray-50 cursor-pointer group'>
        <img src={mainPic} alt="" />
        <div className='flex justify-between items-center'>
            <div>
            <h1 className='text-lg md:text-2xl -mb-1 group-hover:text-[#7D916C] transition'>{title}</h1>
         <p className=' text-sm md:text-lg text-gray-400'>{type}</p>
        </div>
        <p className='md:text-xl text-sm text-white px-1 py-2 md:px-2 md:py-3 bg-[#7D916C]'>{price}$</p>
        </div>
        <div className='flex gap-5 mt-16 items-center'>
            <button className="flex-auto transition  hover:bg-[#7D916C] md:text-[#7D916C] text-white bg-[#7D916C] md:bg-white hover:text-white border md:border-[#7D916C]  py-2 text-[14px] md:text-[16px] " onClick={addToCart}>Add to cart</button>
            <div className=' rounded-full md:p-2 transition hover:bg-[#7c7c7c2c] cursor-pointer'>
            {userConnected && userWish.find((item)=> item == id) ? <img onClick={addToWish} className="w-6 md:w-7" src="/icons/heart-icon-black-filled.svg" alt="" /> : <img onClick={addToWish} className="w-6 md:w-7" src="/icons/heart-icon-black.svg" alt="" />}
 
            
          </div>
        </div>

        
    </div>
    </Link>
  )
}

export default SectionItem