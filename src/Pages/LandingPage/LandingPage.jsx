import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './LandingPage.css';
import { useState, useContext } from 'react';
import { LoginContext } from '../Login/Login'
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Login from '../Login/Login';
import SignUp from '../Signup/Signup';
import Locationcard from '../../Components/Locationcard/Locationcard';
import Button from '../../Components/Button/Button';
import searchicon from '../../Assets/search-icon.svg';
import lekki from '../../Assets/lekki-home.png';
import vicIsland from '../../Assets/vi-home.png';
import bananaIsland from '../../Assets/banana-home.png';
import ikeja from '../../Assets/ikeja-home.png';
import yaba from '../../Assets/yaba-home.png';
import magodo from '../../Assets/magodo-home.png';
import ajah from '../../Assets/ajah-home.png';
import maryLand from '../../Assets/maryland-home.png';
import oshodi from '../../Assets/oshodi-home.png';
import arrow from '../../Assets/arrow.svg';
import Review from '../../Components/Review/Review';
import review1 from '../../Assets/review1.svg';
import review2 from '../../Assets/review2.svg';
import review3 from '../../Assets/review3.svg';
import review4 from '../../Assets/review4.svg';
import review5 from '../../Assets/review5.svg';
import review6 from '../../Assets/review6.svg';
import Footer from '../../Components/Footer/Footer';
import Searchbar from '../../Components/Searchbar/Searchbar';
import {useIsAuthenticated} from 'react-auth-kit';
// import useToken from '../../useToken'


const Landingpage = () => {
  const navigate = useNavigate()
  const [loginNav, setLoginNav] = useState()
  const token = useContext(LoginContext)

  // Usestate for Locationcard Component
  const [editLocation] = useState([
    {id: 1, content: "Lekki", img: lekki, nav: '/Lekki'},  
    {id: 2, content: "Victoria Island", img: vicIsland, nav: '/Victoriaisland'},
    {id: 3, content: "Banana Island", img: bananaIsland, nav: '/Bananaisland'},
    {id: 4, content: "Ikeja", img: ikeja, nav: '/Ikeja'},
    {id: 5, content: "Yaba", img: yaba, nav: '/Yaba'},
    {id: 6, content: "Magodo", img: magodo, nav: '/Magodo'},
    {id: 7, content: "Ajah", img: ajah, nav: '/Ajah'},
    {id: 8, content: "MaryLand", img: maryLand, nav: '/Maryland'},
    {id: 9, content: "Oshodi", img: oshodi, nav: '/Oshodi'},
      ]);


      // Usestate for Reviewcard Component
    const [myReview1] = useState([
    {heading: 'Nicholas & Dammy', img: review1},  
    {heading: "Austine Ette", img: review2},
    {heading: "Kate Shaw", img: review3}
      ])

    const [myReview2] = useState([
    {heading: 'Debra & Jerry', img: review4},  
    {heading: "Julia", img: review5},
    {heading: "Betty", img: review6}
      ])

    // State for Login & Signup Component
    const [loginModal, setLoginModal] = useState(false);
    
     // Login authorization state 
    //  const [token, setToken] = useState();
    
    const loginHandler = () => {
      setLoginModal(true)
    }
    const loginClose = () => {
      console.log(token)
      setLoginModal(false)
    }
    
    // State for Sign-Up component
    const [signUp, setSignUp] = useState(false);
    
    const openSignUp = () => setSignUp(true);
    const closeSignUp = () => setSignUp(false)
 

    const isAuthenticated = useIsAuthenticated()

    // const LocationLoginAuth = (item, id, index) => {
    //   if(!token && id === index + 1){
    //     console.log(token)
    //     console.log(item)
    //     console.log(id)
    //     console.log(index + 1)
    //     setLoginNav(item)
    //     setLoginModal(true)
    //   } else{
    //     navigate(item)
    //   }
    // }
    const LocationLoginAuth = (item, id, index) => {
      if(!isAuthenticated() && id === index + 1){
        console.log(isAuthenticated())
        console.log(item)
        console.log(id)
        console.log(index + 1)
        setLoginNav(item)
        setLoginModal(true)
      } else{
        console.log(isAuthenticated())
        navigate(item)
      }
    }

  return (
    <div className='landingPage'>

      <Login show={loginModal} closeModal={loginClose} loginNav={loginNav} closeLogin={loginClose} openSignup={openSignUp} />
      <SignUp openModal={signUp} closeModal={closeSignUp} />

      
      {/* Hero section of the landing page */}
      <section className='hero'>
    
        {/* Navbar Component */}
          <div className='navcomponent'>
              <NavBar loginClick={loginHandler} SignupClick={openSignUp}/>
          </div>

        {/* Hero Heading */}
          <h1 className='heroheading'>Renting done right finally</h1>
        
        {/* Hero Input Container */}
        <div>
          <Searchbar searchdiv='inputdiv' imgsource={searchicon} searchinput='herosearch' />
        </div>
          {/* <div className='inputdiv'>
            <input type="search" name="search" id="herosearch" placeholder='Where do you want to live?.' />
            <img src={searchicon} alt="searchicon" className='searchicon'/>
          </div> */}

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

          {editLocation.map((item, index) =>
          <Locationcard content={item.content} img={item.img} key={index} item={item.nav} locationClick={() => LocationLoginAuth(item.nav, item.id, index)}/>)}   
        
        </div>
      </section>

      <section className='section3'>
          
          <h4 className='section3heading'>Find homes that suit your style</h4>

          {/* Carousel Component */}
        <Carousel className='carousel' autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
            <div className='carouseldiv1'>
              <p className='carouseltext'>3-Bedroom Flat</p>
              <div>
                <Button text={"View Details"} btnclass={'carouselbutton'} icon={arrow} />
              </div>
            </div>
            <div className='carouseldiv2'>
              <p className='carouseltext'>2-Bedroom Flat</p>
              <div>
                <Button text={"View Details"} btnclass={'carouselbutton'} icon={arrow} />
                
              </div>
            </div>
            <div className='carouseldiv3'>
              <p className='carouseltext'>Duplex</p>
              <div>
                  <Button text={"View Details"} btnclass={'carouselbutton'} icon={arrow} />
              </div>
            </div>
          </Carousel>

          <div className='explorediv'>
              <Button text={"Explore"} btnclass={'carouselbutton'} icon={arrow} />
          </div>
      </section>

        {/* Review Component */}
      <section className="section4">
            <h5 className="section4heading">Thousands of happy stories from our users</h5>
          <Carousel className='reviewcarousel' autoPlay='true' infiniteLoop='true' interval='9000' showThumbs={false}>
            <div className='review'>
              {myReview1.map((item, index) =>(
                <Review heading={item.heading} img={item.img} key={index}/>))}   
            </div>

            <div className='review'>
              {myReview2.map((item, index) =>(
                <Review heading={item.heading} img={item.img} key={index}/>))}   
            </div>

            <div className='review'>
              {myReview1.map((item, index) =>(
                <Review heading={item.heading} img={item.img} key={index}/>))}   
            </div>
          </Carousel>
      </section>

        {/* Carousel strictly for mobile viewport only */}
      <section>
        <Carousel className='mobilecarousel' autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
          <div>
            <Review img={review1} heading='Nicholas & Dammy' />
          </div>
          <div>
            <Review img={review2} heading='Austine Ette' />
          </div>
          <div>
            <Review img={review3} heading='Kate Shaw' />
          </div>
        </Carousel>
      </section>

      {/* Footer Component */}
      <section>
            <Footer />
      </section>
    </div>
  )
}

export default Landingpage