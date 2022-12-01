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
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv1'/>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv2'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv3'/>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv4'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv5'/>
            <CatalogueCard location='Magodo' catcardmaindiv='catcardmaindiv6'/>
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