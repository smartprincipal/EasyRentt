import React from 'react'
import './Locationcard.css'



const Locationcard = ({img, content}) => {
  return (
    <div className='cardcontainer' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
        <h1 className='cardcontent' >{content}</h1>
    </div>
  )
}

export default Locationcard