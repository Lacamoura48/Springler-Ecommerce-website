import React, {useEffect, useState} from 'react'
import {signIn} from '../../slices/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import userSlice from '../../slices/userSlice'
import { useRouter } from 'next/router'




function LogIn() {
    const dispatch = useDispatch()
    const router = useRouter()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [notif, setNotif] = useState(false)
const userConnected = useSelector(state=>state.user.connected)

useEffect(()=>{
    if(userConnected){
       router.replace("/")
    }
}, [userConnected])

const userInfos = useSelector(state => state.user.user)
async function  signin(e){
    e.preventDefault()
  
    dispatch(signIn(email, password))
    

  }



  return (
    <div className='min-h-screen w-full text-black flex justify-center items-center '>
       
    <div className='md:px-52 px-5 gap-3 flex md:gap-20 w-full justify-center'>
        <div className='md:w-72  w-24 bg-[url(/images/Bathroom.jpg)] bg-cover bg-left'>
            
        </div>
        <div className='flex-1 md:flex-initial'>
        <h1 className='text-4xl'>Login</h1>
            <form className='w-full flex flex-col md:text-xl md:mt-20 mt-10 md:gap-10 gap-5 md:w-[470px]'>
            {userConnected && <div className='w-full py-3 bg-green-200 text-green-600 flex justify-center items-center'>
    You have successfully logged in !
</div>}
                <div className='relative'>

                     <label htmlFor="email" className='block'>Email</label>
                <input placeholder='enter your email' type="email" name="email" id="email" className='bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 pl-12 py-3 outline-none  w-full' onChange={(e)=>setEmail(e.target.value)}/>
                <img className='w-6 absolute top-10 left-3' src="/icons/mail-icon-black.svg" alt="" />
                </div>
               <div className='relative'>
                 <label htmlFor="pass" className='block'>Password</label>
                <input placeholder='enter your password' type="password" name="pass" id="pass" className='bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 pl-12 py-3 outline-none w-full' onChange={(e)=>setPassword(e.target.value)}/>
                <img className='w-6 absolute top-10 left-3' src="/icons/lock-icon-black.svg" alt="" />
               </div>
               
                <button onClick={signin} type="submit" className='bg-[#7D916C] px-6 py-3 text-white hover:bg-[#5d6c50]'>Login</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default LogIn