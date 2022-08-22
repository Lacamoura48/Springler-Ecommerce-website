import React from 'react'
import FiltersSection from './FiltersSection'
import ItemsSection from './ItemsSection'
import {useState} from 'react'

function Shop() {
  const [filterss, setFilterss] = useState({})

  function takeFilters(filters){
    setFilterss(filters)
  }

  return (
    <div className=' flex md:px-24 seconde:px-44 pt-32 pb-10 gap-5 seconde:flex-row flex-col'>
        <FiltersSection takeFilters={takeFilters}/>
        <ItemsSection filterss={filterss}/>
    
    </div>
  )
}

export default Shop