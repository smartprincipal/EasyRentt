import React from 'react'
import './Review.css'
import review1 from '../../Assets/review1.svg';
import review2 from '../../Assets/review2.svg';
import review3 from '../../Assets/review3.svg';
import review4 from '../../Assets/review4.svg';

const Review = () => {
  return (
    <div>
      {/* <button classname='review'>
       Review
      </button> */}
      <section className='review'>
        
        <p className='reviewheading'>Review</p>

        <div className='reviewcard'>
          <img src={review1} alt="reviewcard" />
          <img src={review2} alt="reviewcard" />
          <img src={review3} alt="reviewcard" />
          <img src={review4} alt="reviewcard" />
        </div>
  </section>
    </div>
  )
}

export default Review