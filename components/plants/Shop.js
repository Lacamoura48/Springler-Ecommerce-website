import React from 'react'
import FiltersSection from './FiltersSection'
import ItemsSection from './ItemsSection'
import {useState} from 'react'

function Shop() {
  const [filterss, setFilterss] = useState({})
  const [search, setSearch] = useState('')

  function takeFilters(filters){
    setFilterss(filters)
  }

  function takeSearch(search){
    setSearch(search)
  }

  return (
    <div className=' flex md:px-24 seconde:px-44 pt-32 pb-10 gap-5 seconde:flex-row flex-col'>
        <FiltersSection takeFilters={takeFilters} takeSearch={takeSearch}/>
        <ItemsSection filterss={filterss} search={search}/>
    
    </div>
  )
}

export default Shop