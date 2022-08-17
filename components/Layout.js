import React from "react";
import Cart from "./Cart";
import Profile from "./Profile";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useSelector, useDispatch} from 'react-redux'
import {cartActions} from '../slices/cartSlice'
import {motion, AnimatePresence} from "framer-motion"

function Layout({ children }) {

  const cartShow = useSelector(state => state.cart.cartShow)
  const profileShow = useSelector(state => state.cart.profileShow)
  const dispatch = useDispatch()

  return (
    <>
      
        <header className="relative">
            <Navbar/>
            <AnimatePresence>{cartShow && <Cart setShow={()=> dispatch(cartActions.showCart())} />}</AnimatePresence>
            <AnimatePresence>{profileShow && <Profile setShow={()=> dispatch(cartActions.showProfile())} />}</AnimatePresence>
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
