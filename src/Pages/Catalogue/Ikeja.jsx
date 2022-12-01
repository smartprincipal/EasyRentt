import React from 'react'
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';

const Ikeja = () => {

  return (
    
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv5'/>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv2'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv3'/>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv1'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv6'/>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv4'/>
        </div>
        <div>
            <Overview heading='Ikeja' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Ikeja