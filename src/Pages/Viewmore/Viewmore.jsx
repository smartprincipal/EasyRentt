import React from 'react'
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar'
import './Viewmore.css'
import { FaEye } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { BiBath } from 'react-icons/bi';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Pick1 from '../../Assets/Pick1.png';
import Pick2 from '../../Assets/Pick2.png';
import Pick3 from '../../Assets/Pick3.png';
// import { useState } from 'react';
import ViewMoreImg from '../../Components/ViewMoreImg/ViewMoreImg';

const Viewmore = () => {
 const bedBathIcon = { color: "grey"}
 const View =[
  {id:0 , viewImg: Pick1},
  {id:1 , viewImg: Pick2},
  {id:2 , viewImg: Pick3}
 ]
  return (
    <div>
     <section className="section1">
     {/* Hero Section */}
     <CatalogueNavbar/>
     </section>

     <section className='section2'>
      <div className="apartmentView">
       <div className="apartmentBlock">
       Apartment for Rent
       </div>
      <div className="iconblock">
       <FaEye/> <p>17 Views</p>
      </div>
      <div className="iconblock">
       <FaRegClock/>
       <p>Listed: 11/11/2011</p>
      </div>
      <div className="apartmentBlock">
       Victoria Island, 1,356,789
       </div>
      </div>

      <div className="apartmentDetailsBlock">
      <div className="apartmentDetails">
       <p className='apart'>
                Unfurnished
         1-bedroom Flat in 
         Victoria Island
       </p>
       <div className="apartmentBathRoom">
       <div className='bed-div'>
                  <FaBed style={bedBathIcon}/>
                  <p>5 Beds</p>
              </div>
              <div className='bath-div'>
                  <BiBath style={bedBathIcon}/>
                  <p>2 Baths</p>
              </div>
       </div>
      </div>
      <div className="apartmentSection">
       <div className="save">
        <div className="favIcon">


        </div>
        <p>Save</p>
       </div>
       <div className="saveSecond">
       <h6>
        Monthly price
       </h6>
       <p className='saveSecondPrice'>
       <TbCurrencyNaira />120,000
       </p>
       </div>
       <div className="saveSecondApply">
         <Link to='./'>
          Apply
         </Link>
       </div>

      </div>
      </div>
      <div className="blockImg">
      {View.map((choice) => (
       <ViewMoreImg 
       img={choice.viewImg}
       />
      ))}
      </div>
      <p className='blockShow'> Show More</p>


     </section>

     <section className='section3'>
       
     </section>
    </div>
  )
}

export default Viewmore