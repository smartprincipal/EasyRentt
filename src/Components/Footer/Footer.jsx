import React from 'react';
import './Footer.css';
import footerlogo from '../../Assets/footerlogo.svg';
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";

const Footer = () => {
  return (
    <div className='footer'>

        <img className='footerlogo' src={footerlogo} alt="logo" />

        <div className='footermaindiv'>

          <div className='footersubdiv'>
            <div className='footercontent' id='footermobile1'>
              <h2>Company</h2>
              <p>About Us</p>
              <p>Our News</p>
              <p>+234 8169669110</p>
              <p>Easyrent@gmail.com</p>
              <div className='footericon'>
                <a href="http://www.google.com">
                  <img src={google} alt="google" />
                </a>
                <a href="http://www.facebook.com">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="http://www.twitter.com">
                  <img src={twitter} alt="twitter" />
                </a>            
              </div>
            </div>

            <div className='footercontent'>
              <h2>Resources</h2>
              <p>Help Center</p>
              <p>FAQ</p>
              <p>Sitemap</p>
            </div>
          </div>

          <div className='footersubdiv'>
            <div className='footercontent' id='footermobile2'>
              <h2>Tenant</h2>
              <p>Apply Online</p>
              <p>Pay Rent</p>
              <p>Schedule Tour</p>
            </div>

            <div className='footercontent'>
              <h2>Landlord</h2>
              <p>List a property</p>
              <p>Arrange Tour Online</p>
              <p>Tenant Screening</p>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Footer