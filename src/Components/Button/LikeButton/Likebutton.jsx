import React from 'react'
import { useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

const Likebutton = () => {

    // Usestate for like button display
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    return setToggle(prevToggle =>!prevToggle)
  }

  return (
    <div className='likebutton' onClick={handleToggle}>
        {toggle ? <FcLike /> : <FcLikePlaceholder />  }
        
        
    </div>
  )
}

export default Likebutton