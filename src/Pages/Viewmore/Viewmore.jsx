import React from 'react'
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar'
import './Viewmore.css'
import { FaEye } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaBed , FaCouch } from 'react-icons/fa';
import { BiBath } from 'react-icons/bi';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Pick1 from '../../Assets/Pick1.png';
import Pick2 from '../../Assets/Pick2.png';
import Pick3 from '../../Assets/Pick3.png';
// import { useState } from 'react';
import ViewMoreImg from '../../Components/ViewMoreImg/ViewMoreImg';
import Map from '../../Components/Map/Map';
import Footer from '../../Components/Footer/Footer';
import { color } from '@mui/system';
import Post from '../../Components/Post/Post'

const Viewmore = () => {
 const bedBathIcon = { color: "grey"}
 const View =[
  {id:0 , viewImg: Pick1},
  {id:1 , viewImg: Pick2},
  {id:2 , viewImg: Pick3}
 ]

  return (
    <div>
     <section className="viewmoresection1">
     {/* Hero Section */}
     <CatalogueNavbar/>
     </section>

     <section className='viewmoresection2'>
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

     <section className='viewmoresection3'>
        {/* <AppointmentPicker/> */}

        <div className='apartmentDescription'>
        <h2>Apartment Description</h2>
        <h5>Overview</h5>
        <p className='section3Content'>
Pictures are given for furnished apartment but we are offering this apartment without furniture. Beautiful and spacious two room apartment in a residential complex. Optimal layout and design for a comfortable living. It's a perfect place to be at home and relax. The apartment offers shorter commute due to the proximity to public transport and other recreational hot spots around the area. ** No Cellar available
</p>
        </div>
        <div className="amenities">
         <h2>Amenities</h2>
         <div className="amenitiesflex">
          <div>
           <FaCouch style={bedBathIcon}/>
          </div>
          <div>
           Furniture
          </div>

         </div>

        </div>

     </section>

     <section className="viewmoresection4">
      <div className="mapp">
       <Map/>
      </div>
     </section>

     {/* Post Section */}
     <section className='viewmoresection5'>
      <Post/>
     </section>

     <section className='viewmoresection6'>
      <Footer/>
     </section>
    </div>
  )
}

export default Viewmore