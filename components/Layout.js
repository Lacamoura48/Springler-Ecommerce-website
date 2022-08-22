import React, { useEffect } from "react";
import Cart from "./Cart";
import Profile from "./Profile";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useSelector, useDispatch} from 'react-redux'
import {uiActions} from '../slices/uiSlice'
import {AnimatePresence} from "framer-motion"
import {signIn} from '../slices/userSlice'
import {getItems} from '../slices/itemsSlice'


function Layout({ children }) {

  const cartShow = useSelector(state => state.ui.cartShow)
  const profileShow = useSelector(state => state.ui.profileShow)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getItems())
  
  }, [dispatch])
  useEffect(()=>{
    const userData = localStorage.getItem("account")
    if(userData){
      const userDataP = JSON.parse(userData) 
      dispatch(signIn(userDataP.email, userDataP.password))
    }
  },[])

  return (
    <>
      
        <header className="relative">
            <Navbar/>
            <AnimatePresence>{cartShow && <Cart setShow={()=> dispatch(uiActions.showCart())} />}</AnimatePresence>
            <AnimatePresence>{profileShow && <Profile setShow={()=> dispatch(uiActions.showProfile())} />}</AnimatePresence>
        </header>
        <main>
          
            {children}
        </main>
        <footer>
          <Footer />
        </footer>
      
    </>
  );
}

export default Layout;
