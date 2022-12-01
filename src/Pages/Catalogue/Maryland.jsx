import React from 'react'
import './Allcatalogue.css'
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard'
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar'
import Overview from '../../Components/Overview/Overview'
import Footer from '../../Components/Footer/Footer'

const Maryland = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
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
        <div>
            <Overview heading='Maryland' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Maryland