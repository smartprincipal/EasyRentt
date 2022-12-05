import React from 'react';
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';


const Victoriaisland = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Victoria Island' catcardmaindiv='catcardmaindiv6' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Victoria Island' catcardmaindiv='catcardmaindiv3'cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Victoria Island' catcardmaindiv='catcardmaindiv4' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Victoria Island' catcardmaindiv='catcardmaindiv1' cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Victoria Island' catcardmaindiv='catcardmaindiv2'cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Victoria Island' catcardmaindiv='catcardmaindiv5' cardtype='Plant View Bedroom'/>
        </div>
        <div>
            <Overview heading='Victoria Island' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Victoriaisland