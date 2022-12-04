import React from 'react'
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';

const Maryland = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv1' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv2' cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv3'cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv4' cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv5' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv6' cardtype='Magnolia Height'/>
        </div>
        <div>
            <Overview heading='Maryland' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Maryland