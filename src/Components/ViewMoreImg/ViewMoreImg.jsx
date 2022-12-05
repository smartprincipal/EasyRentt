import React from 'react'
import './ViewMoreImg.css'

const ViewMoreImg = (props) => {
  return (
    <div className='passProps'>
     <img className='viewMoreImg' src={props.img} alt="See more Apartment" />
    </div>
  )
}

export default ViewMoreImg