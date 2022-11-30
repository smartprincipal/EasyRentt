import React from 'react'
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard'
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar'

const Maryland = () => {
  return (
    <div>
        <div>
            <CatalogueNavbar />
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard />
            <CatalogueCard />
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard />
            <CatalogueCard />
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard />
            <CatalogueCard />
        </div>
        
    </div>
  )
}

export default Maryland