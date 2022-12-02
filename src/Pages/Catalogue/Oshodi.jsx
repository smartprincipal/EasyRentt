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
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv2' cardtype='Magnolia Height'/>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv3' cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv4' cardtype='Magnolia Height'/>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv5' cardtype='Plant View Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv1' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Oshodi' catcardmaindiv='catcardmaindiv6' cardtype='Plant View Bedroom'/>
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