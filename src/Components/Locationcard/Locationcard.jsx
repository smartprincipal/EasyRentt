import React from 'react'
import './Locationcard.css'



const Locationcard = ({img, content, locationClick}) => {
  return (
    <div className='cardcontainer' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} onClick={locationClick}>
        <h1 className='cardcontent' >{content}</h1>
    </div>
  )
}

export default Locationcard