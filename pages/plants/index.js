import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Shop from '../../components/plants/Shop'


function plants() {
  return (
    <>
    <Head>
      <title>Plants | Springler</title>
      
    </Head>
  <div>
    <Layout>
       <Shop />
    </Layout>
  </div>
    
  </>
  )
}

export default plants