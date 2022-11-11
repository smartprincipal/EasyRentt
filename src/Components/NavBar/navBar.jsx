import React from 'react'
import './Navbar.css';
import Logo from '../../Assets/EasyRent.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

  // Usestate for Hamburger display
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    return setToggle(prevToggle =>!prevToggle)
  }

  
  return (
   <div className='navBar'>
      <div className="navlogo">
        <img src={Logo} alt="EasyRent-Logo" />
      </div>

      <div>
        <ul className="menuList">
          <li><Link to='./'>Rent</Link></li>
          <li><Link to='./'>Buy</Link></li>
          <li><Link to='./'>Blog</Link></li>
          <li><Link to='./'>Partner With Us</Link></li>
        </ul>
      </div>

      <div >
        <Link to='./'><button className="navbutton" id='login'>Log In</button></Link>
        <Link to='./'><button className="navbutton" id='signup'>Sign Up</button></Link>
      </div>

      <div id="hamburger" onClick={handleToggle}>
              {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
      </div>
    </div>
  )
}

export default Navbar