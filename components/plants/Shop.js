import React from 'react'
import FiltersSection from './FiltersSection'
import ItemsSection from './ItemsSection'

function Shop() {
  return (
    <div className=' flex px-44 pt-32 pb-10 gap-5'>
        <FiltersSection />
        <ItemsSection />
    
    </div>
  )
}

export default Shop