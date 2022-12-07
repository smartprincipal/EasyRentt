import './PaymentSideNav.css'
import navlist from '../../Assets/nav-list.svg'

import React from 'react'

const PaymentSideNav = () => {
  return (
    <div className='payment-sidenav-container'>
        <ul className='payment-sidenav'>
            <li><img src={navlist} alt='payment list icon' /></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li></li>
        </ul>
    </div>
  )
}

export default PaymentSideNav