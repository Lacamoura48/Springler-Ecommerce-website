import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Item from '../../components/plants/Item'
import {useSelector, useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'

function PlantId() {
  const router = useRouter()
  const [items, setItems] = useState([])
  useEffect(()=>{
    async function getItems(){
      const itemsRefrence = collection(db, 'items');
    const itemsDocs = await getDocs(itemsRefrence)
        setItems([...itemsDocs.docs.map((doc)=>{
            return {...doc.data(), uid : doc.id}
          } )])
       console.log(items)
    }
    getItems()
    
  }, [])
  
   const itemName = items.find((item)=> item.id == router.query.id)
   console.log(itemName)

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