import React from 'react'
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';

const Oshodi = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv2'/>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv3'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv4'/>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv5'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv1'/>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv6'/>
        </div>
        <div>
            <Overview heading='Oshodi' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Oshodi