import React from 'react'
import './NavBar.css';
import Logo from '../../Assets/EasyRent.svg';
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import UserAvatar from '../../Assets/Avatar.jpg'
import axios  from 'axios';
import {useIsAuthenticated} from 'react-auth-kit';

const NavBar = ({loginClick, SignupClick}) => {

  const isAuthenticated = useIsAuthenticated()

  // Usestate for Hamburger display
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    return setToggle(prevToggle =>!prevToggle)
  }
  
  return (
   <div className='navbar'>

      <div className="navlogo">
        <Link to='/'>
        <img src={Logo} alt="EasyRent-Logo" />
        </Link>
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

          {isAuthenticated() ? null : <div className='buttondiv'>
            {/* <Button text={"Login"} btnclass={'navbutton1'} btnClick={loginClick}/>
            <Button text={"Sign Up"} btnclass={'navbutton2'} btnClick={SignupClick}/> */}
            <img src={UserAvatar} alt=" UserIcon" className='userIcon'/>
          </div>} 
        </ul>
      
        
      </div>


      <div id="hamburger" onClick={handleToggle}>
              {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
      </div>
    </div>
  )
}

export default NavBar
