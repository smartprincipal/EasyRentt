import React from 'react';
import './Footer.css';
import footerlogo from '../../Assets/footerlogo.svg';

const Footer = () => {
  return (
    <div className='footer'>

        <img src={footerlogo} alt="logo" />

        <div className='footersubdiv'>
          <h2>Company</h2>
          <p>About Us</p>
          <p>Our News</p>
          <p>+234 8169669110</p>
          <p>Easyrent@gmail.com</p>
        </div>

        <div className='footersubdiv'>
          <h2>Resources</h2>
          <p>Help Center</p>
          <p>FAQ</p>
          <p>Sitemap</p>
        </div>

        <div className='footersubdiv'>
          <h2>Tenant</h2>
          <p>Apply Online</p>
          <p>Pay Rent</p>
          <p>Schedule Tour</p>
        </div>

        <div className='footersubdiv'>
          <h2>Landlord</h2>
          <p>List a property</p>
          <p>Arrange Tour Online</p>
          <p>Tenant Screening</p>
        </div>

    </div>
  )
}

export default Footer