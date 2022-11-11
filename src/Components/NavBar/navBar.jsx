import React from 'react'
import './navBar.css'
import Logo from '../../Assets/EasyRent.svg'
import { Link } from 'react-router-dom'

const navBar = () => {
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
        <Link to='./'><button className="navbutton">Sign Up</button></Link>
      </div>

    </div>
  )
}

export default navBar