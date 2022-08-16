import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {


  return (
    <div className='bg-[#6B7165] md:flex items-stretch relative overflow-hidden px-40 pt-5 pb-5 hidden'>
                <img src="/images/plant_svg.svg" className='opacity-10 absolute w-52 right-0' alt="" />

        <div className='px-10 flex-1 flex flex-col items-start justify-start'>
            <img className='w-40 -ml-7' src="/logo.svg" alt="" />
            <p><span className='font-bold'>Warning :</span> This website is not actually real, i just made it to showcase my work, so if you buy something, you will be giving me your money for free 😅</p>
        </div>
        <div className='flex flex-col gap-2 border-l border-[#ffffff5e] px-10 flex-1 justify-center'>
            <h2 className='opacity-50 font-bold text-lg'>Links :</h2>
            <a target="_blank" rel="noreferrer" className='hover:underline' href="https://github.com/Lacamoura48"> My Github</a>
            <a target="_blank" rel="noreferrer" className='hover:underline' href="#">My portfolio</a>
            <Link className='hover:underline' href="">See the plants</Link>
            <a target="_blank" rel="noreferrer" className='hover:underline' href="https://discord.gg/gqdSSGksU6">My Discord</a>
        </div>
        <div className='flex flex-col px-10 border-l border-[#ffffff5e] justify-around flex-1 items-center'>
            <div className='flex gap-3'>
            <a target="_blank" rel="noreferrer" className='cursor-pointer' href="https://github.com/Lacamoura48"><FontAwesomeIcon icon={faGithub} className="opacity-60 hover:opacity-100" style={{ fontSize: 25, color: "white" }} /></a>
               <a target="_blank" rel="noreferrer" href=""> <FontAwesomeIcon icon={faInstagram} className="opacity-60 hover:opacity-100" style={{ fontSize: 25, color: "white" }} /></a>
               <a target="_blank" rel="noreferrer" href=""> <FontAwesomeIcon icon={faFacebook} className="opacity-60 hover:opacity-100" style={{ fontSize: 25, color: "white" }} /></a>
               <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anas-sghir-158766238"><FontAwesomeIcon icon={faLinkedin} className="opacity-60 hover:opacity-100" style={{ fontSize: 25, color: "white" }} /></a>
               <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCM40mt0MTQp634y6XWX-Eug"> <FontAwesomeIcon icon={faYoutube} className="opacity-60 hover:opacity-100" style={{ fontSize: 25, color: "white" }} /></a>

            </div>
            <div className='flex gap-5'>
                <p className='hover:underline cursor-pointer'>Terms of Service</p>
                <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                <p className='opacity-50'>© Springler, Inc.</p>
            </div>

        </div>

    </div>
  )
}

export default Footer