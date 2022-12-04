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
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv6' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv2'cardtype='Plant View Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv4'cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv1' cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv3' cardtype='Magnolia Height'/>
            <CatalogueCard location='Lekki' catcardmaindiv='catcardmaindiv5' cardtype='Magnolia Height'/>
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