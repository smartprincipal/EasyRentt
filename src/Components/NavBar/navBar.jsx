import React from 'react'
import './NavBar.css'
import Logo from '../../Assets/EasyRent.svg'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
   <div className='navBar'>
      <div className="log">
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

      <div className="logSig">
        <Link to='./'><button className='log'>Log In</button></Link>
        <Link to='./' ><button className='log'>Sign In</button></Link>
      </div>

    </div>
  )
}

export default navBar