import React from 'react'
import './Review.css'
import review1 from '../../Assets/review1.svg';
import review2 from '../../Assets/review2.svg';
import review3 from '../../Assets/review3.svg';
import review4 from '../../Assets/review4.svg';

const Review = ({img, heading, content}) => {
  return (
    <div className='reviewcard'>

            <img src={img} alt="reviewcard" />
            <h1 className='reviewheading'>{heading}</h1>
            <p className='reviewcontent'>{content}</p>
          
          {/* <img src={review2} alt="reviewcard" />
          <img src={review3} alt="reviewcard" />
          <img src={review4} alt="reviewcard" /> */}
       
    
    </div>
  )
}

export default Review