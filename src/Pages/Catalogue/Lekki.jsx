import React from 'react'
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';

const Lekki = () => {

  return (
    
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv6'/>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv2'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv4'/>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv1'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv3'/>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv5'/>
        </div>
        <div>
            <Overview heading='Lekki' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Lekki