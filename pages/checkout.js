import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Payement from '../components/Payement'
import Script from 'next/script';


function chekOut() {
  
  return (
    <>
    <Head>
      <title>Checkout | Springler</title>

    </Head>
  <div>

   
    <Layout>

       <Payement />
    </Layout>
  </div>
    
  </>

  )
}

export default chekOut