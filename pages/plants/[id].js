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
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  async function getItems(){
    const itemsRefrence = collection(db, 'items');
  const itemsDocs = await getDocs(itemsRefrence)
      setItems([...itemsDocs.docs.map((doc)=>{
          return {...doc.data(), uid : doc.id}
        } )])
        setLoading(false)
  }
  useEffect(()=>{
     getItems()
     
  }, [])
  useEffect(()=>{
    if(loading == false){
      setItem(items.find((item)=> item.id == router.query.id))
  }
  }, [loading])
  


  return (
    <>
    <Head>
      <title>{loading ? 'loading...' : item.title} | Springler</title>
      
    </Head>
  <div>
    <Layout>
      {loading? <div className='min-h-screen flex justify-center items-center text-black'><img className='w-56' src="/logoTwo.svg" alt="" /></div> : <Item />}
    </Layout>
  </div>
    
  </>
  )
}

export default PlantId