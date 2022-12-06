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
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv5' cardtype='Magnolia Height'/>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv2' cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv3' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv1'cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv6' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Ikeja' catcardmaindiv='catcardmaindiv4' cardtype='Magnolia Height'/>
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