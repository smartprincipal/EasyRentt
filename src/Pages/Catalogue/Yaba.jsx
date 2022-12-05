import React from 'react'

const Yaba = () => {

  return (
    
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv6' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv4' cardtype='Plant View Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv1' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv3' cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv5' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv2' cardtype='Magnolia Height'/>
        </div>
        <div>
            <Overview heading='Yaba' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Yaba