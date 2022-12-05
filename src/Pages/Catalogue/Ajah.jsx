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
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv2' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv1' cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv3' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv4' cardtype='Plant View Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv6' cardtype='Magnolia Height'/>
            <CatalogueCard location='Ajah' catcardmaindiv='catcardmaindiv5'cardtype='Suite 9 Bedroom'/>
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