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
          
          {/* <img src={review2} alt="reviewcard" />
          <img src={review3} alt="reviewcard" />
          <img src={review4} alt="reviewcard" /> */}
       
    
    </div>
  )
}

export default Review