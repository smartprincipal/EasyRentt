import React from 'react'
import './Locationcard.css'
import searchicon from '../../Assets/search-icon.svg'


const Locationcard = ({img, content}) => {
  return (
    <div className='cardcontainer' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
        <h1 className='cardcontent' >{content}</h1>
    </div>
  )
}

export default Locationcard