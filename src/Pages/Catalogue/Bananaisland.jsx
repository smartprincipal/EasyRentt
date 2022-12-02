import React from 'react'
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';

const Bananaisland = () => {
  return (
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Banana Island' catcardmaindiv='catcardmaindiv2' cardtype='Magnolia Height'/>
            <CatalogueCard location='Banana Island' catcardmaindiv='catcardmaindiv3' cardtype='Plant View Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Banana Island' catcardmaindiv='catcardmaindiv4' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Banana Island' catcardmaindiv='catcardmaindiv1' cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Banana Island' catcardmaindiv='catcardmaindiv6' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Banana Island' catcardmaindiv='catcardmaindiv5' cardtype='Suite 9 Bedroom'/>
        </div>
        <div>
            <Overview heading='Banana Island' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Bananaisland