import React from 'react'
import './Review.css'


const Review = ({img, heading}) => {

  return (
    
    <div className='reviewcard'>

        <img src={img} alt="reviewcard" />

        <h1 className='reviewheading'>{heading}</h1>

        <p className='reviewcontent'>
          “Maybe it’s just a coincidence, 2  times I’ve conceived 
          after marriage was at EasyRent Shortlet Apartments. 
          Hubby  has booked another trip for next week”
        </p>
       
    </div>
  )
}

export default Review