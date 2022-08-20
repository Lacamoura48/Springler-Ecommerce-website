import React, {useState, useEffect} from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../../firebase-config"
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'


function SignUp() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [username, setUsername] = useState('')
const userConnected = useSelector(state=>state.user.connected)

useEffect(()=>{
  if(userConnected){
     router.replace("/")
  }
}, [userConnected])
  function createAccount(e){
    e.preventDefault()

createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
       const userCol = collection(db, "users")
       await addDoc(userCol, {uid : user.uid, username : username, email : user.email})
    
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }



  return (
    <div className='min-h-screen w-full text-black flex justify-center items-center '>
    <div className='md:px-52 px-5 gap-3 flex md:gap-20 w-full justify-center'>
        <div className='md:w-72  w-24 bg-[url(/images/Bathroom.jpg)] bg-cover bg-left'>
            
        </div>
        <div className='flex-1 md:flex-initial'>
        <h1 className='text-4xl'>Sign Up</h1>
            <form className='w-full flex flex-col md:text-xl md:mt-20 mt-10 md:gap-10 gap-5 md:w-[470px]'>
           

                <div className='relative'>
                    <label htmlFor="username" className='block'>Username</label>
                <input placeholder='enter your username' type="text" name="username" id="username" className='bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 pl-12 py-3 outline-none  w-full' onChange={(e)=>setUsername(e.target.value)}/>
                <img className='w-6 absolute top-10 left-3' src="/icons/user-icon-black.svg" alt="" />
                </div>
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
               
                <button onClick={createAccount} type="submit" className='bg-[#7D916C] px-6 py-3 text-white hover:bg-[#5d6c50]'>Sign Up</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default SignUp