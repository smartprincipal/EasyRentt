import './PaymentHero.css'
import paymentImg from '../../Assets/payment-hero.svg'
import paymentHero from '../../Assets/payment-hero2.svg'



import React from 'react'
import Button from '../Button/Button'

const PaymentHero = () => {
  return (
    <div className='payment-container'>
        <div className='hero-bg'>
          
            <img src={paymentImg} alt='family of three smiling' />
            <img src={paymentHero} alt='overlay to brighten the main' className='hero-backdrop'/>
            
        </div>
            <p className='payment-logo'>Easy<span className='payment-logo-rent'>Rent</span></p>
        <div className='payment-sub-container'>
            <h1 className='payment-head'> Payment Online</h1>
            <p className='payment-text'>Make payments quickly and easy</p>
            <Button text={'Make payment'} btnclass={'payment-btn'} style={{background: '#FCBC0E', borderRadius: '90px', padding: '16px 65px', color: 'black', border: 'none', fontFamily: 'inherit', display: 'block', margin: '0 auto'}}/>
        </div>
    </div>
  )
}

export default PaymentHero