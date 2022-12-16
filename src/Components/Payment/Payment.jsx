import React from 'react'
import './Payment.css'
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Payment = () => {
 const paynowBTN = {
  background: '#FFC100',
  width: '175px',
  height: '40px',
  border: '1px solid #CBCBCB',
borderRadius: "15px",
fontFamily: 'Inter',
fontSize: '18px',
fontWeight: '400px',
lineHeight: '22px',
textAlign: 'center'

 }
//  const Payment = () => {
//  const [ ] = useState([ ])

//   const getSearchFilter = () =>{
//     axios.get('https://easyrent.onrender.com/users/book/sort').then((res)=>{

//     })

//     }
//   }

  return (
    <div className='paymentBlock'>
     <h3 className='paymentHeading'> Payment </h3>
     <div className="paymentSubBlock">
     <p>Confirm Payment</p>
     <div className='paymentImages'>
     <img src={FaCcVisa} alt="" />
     <img src={FaCcMastercard} alt="" />
     <img src={FaCcPaypal} alt="" />
     </div>
      </div>
      {/* Card Input */}
     <div className='paymentInputFlex'>
     <div className='block1'>
      <label 
      htmlFor="" className='label1'>
       Name on Card
       </label>
      
      <input 
      type="text" 
      name="" 
      id="" 
      className='cardp' 
      placeholder='Name on Card'
      />
     </div>
     <div className='block2'>
      <label 
      htmlFor=""
      className='label2'>Exp Date
      </label>
      <input 
      type="text" 
      name="" 
      id="" 
      className='cardw'
      placeholder='Exp Date'
      />
     </div>
     </div>

      <div className='paymentInputFlex2'>
     <div className='block3'>
      <label htmlFor="" className='label3'>Card Number</label>
      <input 
      type="text" 
      name="" 
      id="" 
      className='cardp'
      placeholder='Card Number'
      />
     </div>

     <div className='block4'>
      <label htmlFor="" className='label4'>CVV</label>
      <input 
      type="text" 
      name="" 
      id="" 
      className='cardw'
      placeholder='CVV'
      />
     </div>
     </div>

     <div className="paynowBTNBlock">
      <Link to='./'>
      <Button style={paynowBTN} text={'Pay Now'}/>
      </Link>
     </div>
    </div>
  )
}

export default Payment