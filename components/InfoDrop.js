import React, { useState } from 'react'
import {motion} from 'framer-motion'



function InfoDrop({titleInfo, descriptionInfo, descHeight}) {
    let [opened, setOpened] = useState(false);

    const openInfo =()=>{
        setOpened(!opened)
    }

  return (
    <div className={`my-3 w-full text-black text-xl seconde:text-2xl hover:bg-gray-100 bg-gray-50 rounded-md pl-2 pr-4 ${opened && 'bg-gray-50'}`}>
        <div className='flex items-center justify-between cursor-pointer'  onClick={openInfo}><h1 className=''>{titleInfo}</h1> <motion.img animate={{rotate : opened ? 270 : 90}} src="/icons/arrow-icon.svg" className='rotate-90' alt="" /></div>
        <motion.div initial={{height : 0}} animate={{height : opened ? 'auto' : 0}} className={`text-gray-400 text-lg seconde:text-xl overflow-hidden`}>
            <p className='px-8 py-3 text-gray-500'>{descriptionInfo}</p>
        </motion.div>
        
    </div>
  )
}

export default InfoDrop