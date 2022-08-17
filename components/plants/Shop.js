import React from 'react'
import FiltersSection from './FiltersSection'
import ItemsSection from './ItemsSection'

function Shop() {
  return (
    <div className=' flex md:px-24 seconde:px-44 pt-32 pb-10 gap-5 seconde:flex-row flex-col'>
        <FiltersSection />
        <ItemsSection />
    
    </div>
  )
}

export default Shop