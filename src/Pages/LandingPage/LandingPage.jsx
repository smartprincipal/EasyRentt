import React from 'react'
import './LandingPage.css';
import NavBar from '../../Components/NavBar/navBar'
import Locationcard from '../../Components/Locationcard/Locationcard';
import { useState } from 'react';
import searchicon from '../../Assets/search-icon.svg'


const Landingpage = () => {

  // Usestate for Locationcard Component
  const [editLocation] = useState([
    {content: "Lekki", img: searchicon}, 
    {content: "Victoria Island", img: searchicon},
    {content: "Banana Island", img: searchicon},
    {content: "Ikeja", img: searchicon},
    {content: "Yaba", img: searchicon},
    {content: "Magodo", img: searchicon},
    {content: "Ajah", img: searchicon},
    {content: "MaryLand", img: searchicon},
    {content: "Oshodi", img: searchicon},
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
      <section>
          <h3>Featured Locations</h3>
          <p>Discover thousands of apartments and homes for rent in Lagos</p>

        <div>

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

    </div>
  )
}

export default Landingpage