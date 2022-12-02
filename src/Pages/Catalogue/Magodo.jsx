import React from 'react'
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';

const Magodo = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv1'cardtype='Magnolia Height'/>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv2' cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv3'cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv4' cardtype='Plant View Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv5' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv6'cardtype='Magnolia Height'/>
        </div>
        <div>
            <Overview heading='Magodo' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Magodo