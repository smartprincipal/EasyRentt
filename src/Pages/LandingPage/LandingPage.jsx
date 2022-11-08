import React from 'react'
import './LandingPage.css';
import NavBar from '../../Components/NavBar/navBar'

import searchicon from '../../Assets/search-icon.svg'


const Landingpage = () => {
  return (
    <div >

      {/* Hero section of the landing page */}
      <section className='hero'>
    
        {/* Navbar Component */}
        <div className='navcomponent'>
            <NavBar />
        </div>

        <h1 className='heroheading'>Renting done right finally</h1>
        
        <div className='inputdiv'>
          <input type="search" name="search" id="herosearch" placeholder='Where do you want to live?.' />
          <img src={searchicon} alt="searchicon" className='searchicon'/>

        </div>

        <div>

        </div>

      </section>

    </div>
  )
}

export default Landingpage