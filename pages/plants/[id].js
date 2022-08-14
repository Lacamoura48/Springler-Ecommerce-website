import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Item from '../../components/plants/Item'

function PlantId() {
  return (
    <>
    <Head>
      <title>Item | Springler</title>
      
    </Head>
  <div>
    <Layout>
       <Item />
    </Layout>
  </div>
    
  </>
  )
}

export default PlantId