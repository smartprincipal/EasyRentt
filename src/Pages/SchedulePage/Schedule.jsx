import React from 'react'
import Button from '../../Components/Button/Button'
import './Schedule.css'
import { Link } from 'react-router-dom'

const Schedule = () => {
 const scheduleTour={
  background:'#FCBC0E',
  height: '80px',
width: '403px',
borderRadius: '90px',
border:'none',
cursor:'pointer',
fontSize: '32px',
fontWeight: '500px',
lineHeight: '39px',
textAlign: 'center'

 }

  return (
    <div className='scheduleContainer'>
     <div className="scheduleBlock">
      <h3>Schedule a Tour</h3>
      <p className='select'>Select a date and time to view</p>
      <h4>Victoria Island</h4>

      <form action="" method="post" className='scheduleForm'>
       <div className="name">
        <div className="firstName">
         <div className='firstnameLabel'>

         <label 
         htmlFor="" >
          First Name
          </label>
         </div>

         <input 
         type="text" 
         name="First Name" 
         id="" 
         className='firstNameInput'
         />
        </div>
        
        <div className="lastName">
         <div className='lastnameLabel'>
         
         <label 
         htmlFor="" >
          Last Name
          </label>

         </div>
         <input 
         type="text" 
         name="Last Name" 
         id="" 
         className='lastNameInput'
         />

        </div>

         
        </div>

        <div className="email">
         <div className='emailLabel'>
         
         <label 
         htmlFor="" >
          Email
          </label>

         </div>
         <input 
         type="email" 
         name="email" 
         id="" 
         className='emailInput'
         />

       </div>
       <div className="phonenumber">
         <div className='phonenumberLabel'>
         
         <label 
         htmlFor="" >
          Phone Number
          </label>

         </div>
         <input 
         type="text" 
         name="Phone number" 
         id="" 
         className='phonenumberInput'
         />

       </div>

       <div className="check">
       <input type="checkbox" name="" id="" required className='checkbox'/>Yes, I’d be happy to receive text messages!

       </div>

       <div className='scheduleBTN'>
        <Link to='./'>
        <Button style={scheduleTour} text={'Schedule Your Tour'}/>
        </Link>
       </div>

      </form>
     </div>

    </div>
  )
}

export default Schedule