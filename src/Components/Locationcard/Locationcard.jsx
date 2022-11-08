import React from 'react'
import './Locationcard.css'
import searchicon from '../../Assets/search-icon.svg'


const Locationcard = ({img, content}) => {
  return (
    <div style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat'}}>
        <h1 className='headd' >{content}</h1>
    </div>
  )
}

export default Locationcard