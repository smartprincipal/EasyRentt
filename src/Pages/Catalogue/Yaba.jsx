import React from 'react'

const Yaba = () => {

  return (
    
    <div className='maincatcardcontainer'>
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv6'/>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv4'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv1'/>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv3'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv5'/>
            <CatalogueCard location='Yaba' catcardmaindiv='catcardmaindiv2'/>
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