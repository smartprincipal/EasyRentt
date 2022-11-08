import React from 'react'
import './LandingPage.css';
import NavBar from '../../Components/NavBar/navBar'
import Locationcard from '../../Components/Locationcard/Locationcard';
import { useState } from 'react';
import searchicon from '../../Assets/search-icon.svg';
import lekki from '../../Assets/lekki.svg';
import vicIsland from '../../Assets/victoria-island.svg';
import bananaIsland from '../../Assets/banana-island.svg';
import ikeja from '../../Assets/ikeja.svg';
import yaba from '../../Assets/yaba.svg';
import magodo from '../../Assets/magodo.svg';
import ajah from '../../Assets/ajah.svg';
import maryLand from '../../Assets/maryland.svg';
import oshodi from '../../Assets/oshodi.svg'


const Landingpage = () => {

  // Usestate for Locationcard Component
  const [editLocation] = useState([
    {content: "Lekki", img: lekki}, 
    {content: "Victoria Island", img: vicIsland},
    {content: "Banana Island", img: bananaIsland},
    {content: "Ikeja", img: ikeja},
    {content: "Yaba", img: yaba},
    {content: "Magodo", img: magodo},
    {content: "Ajah", img: ajah},
    {content: "MaryLand", img: maryLand},
    {content: "Oshodi", img: oshodi},
      ])


  return (

    <div >

      {/* Hero section of the landing page */}
      <section className='hero'>
    
        {/* Navbar Component */}
          <div className='navcomponent'>
              <NavBar />
          </div>

        {/* Hero Heading */}
          <h1 className='heroheading'>Renting done right finally</h1>
        
        {/* Hero Input Container */}
          <div className='inputdiv'>
            <input type="search" name="search" id="herosearch" placeholder='Where do you want to live?.' />
            <img src={searchicon} alt="searchicon" className='searchicon'/>
          </div>

        {/* Hero Caption */}
          <div className='captiondiv'>
            <h2 className='caption'>LIVING SPACE DESIGN WITH EXCELLENCE</h2>
          </div>

      </section>

      {/* Featured Location Section */}
      <section className='section2'>

          <h3 className='section2heading'>Featured Locations</h3>
          <p className='section2subheading'>Discover thousands of apartments and homes for rent in Lagos</p>


          {/* Locationcard Component */}
        <div className='locationcarddiv'>

          {editLocation.map((item) =>(
          <Locationcard content={item.content} img={item.img}/>))}   
        
          {/* <Locationcard content={editLocation.content1} img={editLocation.img1}/>
          <Locationcard content={editLocation.content2}/>
          <Locationcard content={editLocation.content3}/>
          <Locationcard content={editLocation.content4}/>
          <Locationcard content={editLocation.content5}/>
          <Locationcard content={editLocation.content6}/>
          <Locationcard content={editLocation.content7}/>
          <Locationcard content={editLocation.content8}/>
          <Locationcard content={editLocation.content9}/> */}
        </div>
      </section>

      <section>
          
          <h4>Find homes that suit your style</h4>

          {/* Carousel Component */}
      </section>
    </div>
  )
}

export default Landingpage