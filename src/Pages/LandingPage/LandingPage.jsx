import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './LandingPage.css';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import NavBar from '../../Components/NavBar/NavBar';
import Locationcard from '../../Components/Locationcard/Locationcard';
import searchicon from '../../Assets/search-icon.svg';
import lekki from '../../Assets/lekki.svg';
import vicIsland from '../../Assets/victoria-island.svg';
import bananaIsland from '../../Assets/banana-island.svg';
import ikeja from '../../Assets/ikeja.svg';
import yaba from '../../Assets/yaba.svg';
import magodo from '../../Assets/magodo.svg';
import ajah from '../../Assets/ajah.svg';
import maryLand from '../../Assets/maryland.svg';
import oshodi from '../../Assets/oshodi.svg';
import arrow from '../../Assets/arrow.svg';
import Review from '../../Components/Review/Review';
import Login from '../Login/Login';



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


    const [loginModal, setLoginModal] = useState(false);
    const loginHandler = () => {
      setLoginModal(true)
    }
    const loginClose = () => {
      setLoginModal(false)
    }
  return (
    <div className='landingPage'>
      <Login show={loginModal} closeModal={loginClose}/>
      
      {/* Hero section of the landing page */}
      <section className='hero'>
    
        {/* Navbar Component */}
          <div className='navcomponent'>
              <NavBar loginClick={loginHandler}/>
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

          {editLocation.map((item, index) =>(
          <Locationcard content={item.content} img={item.img} key={index}/>))}   
        
        </div>
      </section>

      <section className='section3'>
          
          <h4 className='section3heading'>Find homes that suit your style</h4>

          {/* Carousel Component */}
          <Carousel className='carousel' autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
            <div className='carouseldiv1'>
              <p className='carouseltext'>3-Bedroom Flat</p>
              <div className='carousellink'>
                <a  href="#"> View Details </a>
                <img id='carouselarrow' src={arrow} alt="arrow"  />
              </div>
            </div>
            <div className='carouseldiv2'>
              <p className='carouseltext'>2-Bedroom Flat</p>
              <div className='carousellink'>
                <a  href="#"> View Details </a>
                <img id='carouselarrow' src={arrow} alt="arrow"  />
              </div>
            </div>
            <div className='carouseldiv3'>
              <p className='carouseltext'>Duplex</p>
              <div className='carousellink'>
                <a  href="#"> View Details </a>
                <img id='carouselarrow' src={arrow} alt="arrow"  />
              </div>
            </div>
          </Carousel>

          <div className='carousellink2'>
                <a  href="#"> Explore </a>
                <img id='carouselarrow' src={arrow} alt="arrow"  />
          </div>
      </section>

      <section className="section4">
        <Review/>
      </section>
    </div>
  )
}

export default Landingpage