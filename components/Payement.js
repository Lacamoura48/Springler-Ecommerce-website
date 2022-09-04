import React, {useEffect, useState} from 'react';
import {cartActions} from '../slices/cartSlice';
import {useSelector, useDispatch} from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from 'next/link';
import PayementForm from './PayementForm';


function Payement() {
  
    const [lockPayement, setLockPayement] = useState(true)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(cartActions.GET_CART_ITEMS())
     }, []);
    const cartItems = useSelector(state => state.cart.cartItems)
    useEffect(()=>{
        if(cartItems[0]){
          
          const eachTotal = cartItems.map((iteme) => parseInt(iteme.quantity) * parseFloat(iteme.price))
          setTotal(eachTotal.reduce((a,b)=> a+b))
        }
        
      },[cartItems])
      const paypalOptions = {
        "client-id": "AaG_Pr3VL4M7bv1JrbgXGvYeW4yG90pFt-tTel0qe2VhRx5SqgkMsBERBnPQ4ZsydL2DQbNHvyuxdDKG",
        currency: "USD",
       
    };
    function paypalOrder(data, actions) {
        // Set up the transaction
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total
            }
          }],
          application_context: {
            shipping_preference: 'NO_SHIPPING'
          }
        });
        
      }
    function paypalApprove(data, actions) {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }
    
  return (
    <div className='min-h-screen w-full text-black flex justify-around items-center'>
        <div className='px-14 py-8 text-xl'>
         <PayementForm setUnlock={(t)=> setLockPayement(t)}/>
                <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons disabled={lockPayement}  style={{ layout: "vertical", color:"silver" }} createOrder={paypalOrder} onApprove={paypalApprove}/>
            </PayPalScriptProvider>
                <Link href={{pathname : '/plants'}}><button className='border-[0.7px] border-[#7D916C] py-2 px-4 text-[#7D916C] hover:bg-[#7D916C] hover:text-white transition'>Back to Plants</button></Link>
           
        </div>
           
        
        <div className='bg-[#7D916C] text-white w-[450px] text-lg pt-5 rounded-lg'>
            <div className=' px-5 mb-28'>
            <h1 className='mb-8 text-xl'>Order summary</h1>
            <div className='flex flex-col w-full border-b-[0.7px] border-[#ffffff] pb-5'>
                {cartItems.map((item)=>{
                    return (<div key={item.id} className='flex justify-between'><p><span  className='font-normal'>{item.title}</span> x <span>{item.quantity}</span></p><p className='font-normal'>{(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</p></div>)
                })}
            </div>
            <div className='pt-5 font-normal'>
            <div className='flex justify-between'><p>dilivery</p><p >5$</p></div>
            <div className='flex justify-between'><p>discount</p><p >0$</p></div>
            </div>
        </div>
        <div className='bg-[#6E7E60] rounded-lg py-5 px-4 flex justify-between'>
                <p>Total price</p>
                <span className='font-normal'>{total.toFixed(2)}$</span>
        </div>
        </div>
    </div>
  )
}

export default Payement