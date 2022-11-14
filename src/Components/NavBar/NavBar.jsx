import React from 'react'
import './NavBar.css';
import Logo from '../../Assets/EasyRent.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

  // Usestate for Hamburger display
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    return setToggle(prevToggle =>!prevToggle)
  }

  
  return (
   <div className='navbar'>
      <div className="navlogo">
        <img src={Logo} alt="EasyRent-Logo" />
      </div>

      <div className={toggle ? 'active' : 'menuList' }>
        <ul >
          <div className='navdiv'>
            <div className='navlinks'>
              <li><Link to='./'>Rent</Link></li>
              <li><Link to='./'>Buy</Link></li>
            </div>
            <div className='navlinks'>
              <li><Link to='./'>Blog</Link></li>
              <li><Link to='./' id='special'>Partner With Us</Link></li>
            </div>
          </div>

          <div className='buttondiv'>
            <button className="navbutton" id='login'><Link to='./'>Log In</Link></button>
            <button className="navbutton" id='signup'><Link to='./'>Sign Up</Link></button>
          </div>
        </ul>
      
        
      </div>


      <div id="hamburger" onClick={handleToggle}>
              {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
      </div>
    </div>
  )
}

export default NavBar
