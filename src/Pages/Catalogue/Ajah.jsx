import React from 'react'
import './Allcatalogue.css'
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard'
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar'
import Overview from '../../Components/Overview/Overview'
import Footer from '../../Components/Footer/Footer'

const Ajah = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv2'/>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv1'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv3'/>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv4'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv6'/>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv5'/>
        </div>
        <div>
            <Overview heading='Ajah' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Ajah