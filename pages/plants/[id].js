import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Item from '../../components/plants/Item'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'

function PlantId() {
  const router = useRouter()

   const itemName = useSelector(state=> state.items.itemsItems).find((item)=> item.id == router.query.id)

  return (
    <>
    <Head>
      <title>{itemName.title} | Springler</title>
      
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