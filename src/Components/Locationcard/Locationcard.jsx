import React from 'react'
import './Locationcard.css'

const Locationcard = ({img, content}) => {
  return (
    <div>
        <h1 style={img}>{content}</h1>
    </div>
  )
}

export default Locationcard