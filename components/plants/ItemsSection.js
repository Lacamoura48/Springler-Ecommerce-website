import SectionItem from './SectionItem'
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

function ItemsSection({filterss}) {
  
let storeItems = useSelector(state=> state.items.itemsItems)
let [itemsToshow, setItemsToshow]=useState(storeItems)
useEffect(()=>{
  setItemsToshow(storeItems)
},[storeItems])
useEffect(()=>{
  
  let itemsTofilter = storeItems
  if(filterss){
    
    if(filterss.search){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.title == filterss.search
      })}
  
    if(filterss.min){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.price >= parseFloat(filterss.min)
      })
    }
    if(filterss.max){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.price <= parseFloat(filterss.max)
      })
    }
    if(filterss.pl){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.type == "Peace lily"
      })
    }
    if(filterss.scc){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.type == "Succulent"
      })
    }
    if(filterss.csp){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.type == 'Curly Spider Plant'
      })
    }
    if(filterss.sp){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.type == 'Snake plant'
      })
    }
    if(filterss.rce){
      itemsTofilter = itemsTofilter.filter((item)=>{
        return item.type == 'Red Chinese evergreen'
      })
    }
    
  
  
    setItemsToshow(itemsTofilter)
  }
  
},[filterss])

  return (
    <div className='md:flex-3 flex flex-wrap '>
        
            {itemsToshow.map((plant)=>{
              return (<SectionItem key={plant.id} id={plant.id} title={plant.title} type={plant.type} price={plant.price} mainPic={plant.mainPic}/>)
            }) }
            
            
           
      
    </div>
  )
}

export default ItemsSection