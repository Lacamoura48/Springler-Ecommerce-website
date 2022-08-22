import React, { useState } from "react";
import InfoDrop from "../InfoDrop";
import { motion } from "framer-motion";
import {useRouter} from "next/router";
import {addItemToCart} from '../../slices/cartSlice';
import {useDispatch, useSelector} from 'react-redux'

function Item() {
 const dispatch = useDispatch()
 const router = useRouter()
 const item = useSelector(state=> state.items.itemsItems).find((item)=> item.id == router.query.id)

  async function addToCart(){
    dispatch(addItemToCart({id : item.id, title : item.title, price : item.price, quantity : 1, total : item.price, mainPic : item.mainPic}))
    
  }
  const diapoImages = [
    item.mainPic,
    item.secPic,
    item.thirdPic,
  ];
  let [imageSelected, setImageSelected] = useState(0);

  function selectImage(num) {
    setImageSelected(num);
  }

  return (
    <div className="md:min-h-screen text-black w-full pt-20 md:flex justify-center seconde:px-40 md:pb-10">
      <div className="flex flex-col w-full px-3 pt-5 gap-1 md:flex-5">
        <div className="w-full">
          {diapoImages.map((item, index) => {
            return (
              index === imageSelected && (
                <motion.img
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={diapoImages[imageSelected]}
                  className="max-w-full max-h-full"
                  alt=""
                />
              )
            );
          })}
        </div>
        <div className="flex gap-1">
          <div
            className={
              imageSelected == 0 && "opacity-50 scale-[0.95] transition-all"
            }
            onClick={() => setImageSelected(0)}
          >
            <img src={diapoImages[0]} alt="" />
          </div>
          <div
            className={
              imageSelected == 1 && "opacity-50 scale-[0.95] transition-all"
            }
            onClick={() => setImageSelected(1)}
          >
            <img src={diapoImages[1]} alt="" />
          </div>
          <div
            className={
              imageSelected == 2 && "opacity-50 scale-[0.95] transition-all"
            }
            onClick={() => setImageSelected(2)}
          >
            <img src={diapoImages[2]} alt="" />
          </div>
        </div>
        </div>
        <div className=" md:flex-7 md:pr-40 md:pl-10 md:pt-10">
          <div className="flex justify-between items-center px-7 pt-2 mb-10 px-40">
            <div>
              <h1 className="text-3xl seconde:text-5xl">{item.title}</h1>
              <p className="text-lg seconde:text-xl text-gray-400">{item.type}</p>
            </div>
            <div>
              <p className="text-2xl seconde:text-4xl text-[#58674c]">{item.price}$</p>
            </div>
          </div>

          <div className="display flex  justify-around items-center">
            <div className=" flex flex-col seconde:flex-row justify-center items-center border seconde:border-none seconde:flex-auto rounded-md px-5 py-3 text-lg text-gray-400 ">
              <img
                className="w-1/3 seconde:w-10 mb-2  seconde:mr-5"
                src="/icons/cartt-icon-black.svg"
                alt=""
              />
              <p>Best buy</p>
            </div>
            <div className="flex flex-col seconde:flex-row justify-center items-center border seconde:border-none rounded-md seconde:flex-auto px-5 py-3 text-lg text-gray-400">
              <img
                className="w-1/3 seconde:w-10 mb-2  seconde:mr-5"
                src="/icons/stars-icon-black.svg"
                alt=""
              />
              <p>Aesthetic</p>
            </div>
            <div className="flex flex-col seconde:flex-row justify-center items-center border seconde:border-none seconde:flex-auto rounded-md px-5 py-3 text-lg text-gray-400">
              <img
                className="w-1/3 seconde:w-10 mb-2 seconde:mr-5"
                src="/icons/sun-icon-black.svg"
                alt=""
              />
              <p>Needs sun</p>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-col">
            <InfoDrop
              titleInfo="Description"
              descriptionInfo={item.description}
              descHeight={200}
            />
            <InfoDrop
              titleInfo={`how to treat a ${item.type}`}
              descriptionInfo={item.likes}
              descHeight={200}
            />
          </div>

          <div className="flex gap-5 mt-16 items-center md:float-right">
            <button onClick={addToCart} className="flex-auto md:flex-initial md:px-10 md:rounded-md transition  bg-[#7D916C] hover:bg-[#6e805e] text-white border border-[#7D916C] py-5 text-[18px]">
              Add to cart
            </button>
            <div className=" rounded-full p-2 transition hover:bg-[#7c7c7c2c] cursor-pointer text-center">
              
              <img className="w-10" src="/icons/heart-icon-black.svg" alt="" />
              <p>{item.loves}</p>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Item;
