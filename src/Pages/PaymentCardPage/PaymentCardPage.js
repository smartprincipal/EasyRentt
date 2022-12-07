import './PaymentCardPage.css'

import React from 'react'
import PaymentHero from '../../Components/PaymentHero/PaymentHero'

const PaymentCardPage = () => {
  return (
    <div>
        <PaymentHero />
        <div className='section-2-container'>
            <PaymentSideNav />
            <div className='lease-sub-main'>
                <div className='sub-nav-container'>
                  <LeaseSubNav />
                </div>
                <div className='lease-info-container'>
                    <h3 className='lease-sub-head'> Payment </h3>
                    <p className='lease-text'>Confirm Payment</p>
                    {/* <form className='lease-form'>
                      <div>
                        <label htmlFor='move-in' className='label-date'>Move-in-Date</label>
                        <input type='text' id='move-in' className='date-input'/>
                      </div>
                      <div>
                        <label htmlFor='lease-term' className='label-term'>Lease Term:</label>
                        <input type='text' id='lease-term' className='term-input'/>
                      </div>
                      <p>Rent: <span className='rent-amount'>450000</span></p>
                      <div className='lease-btn-container'>
                        <Button text={'Save'} style={{background: '#0B0000', borderRadius: '16px', padding: '5px 20px', color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'inherit'}}/>
                        <Button text={'Save & Continue'} style={{padding: '8px 20px', background: '#FFC100', borderRadius: '15px', border: 'none', fontFamily: 'inherit'}}/>
                      </div>
                    </form> */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentCardPage