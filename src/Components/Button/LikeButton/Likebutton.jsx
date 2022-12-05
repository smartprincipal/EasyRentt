import { useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

const Likebutton = () => {


    // useState for like button display
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    return setToggle(prevToggle =>!prevToggle)
  };

  const likeButtonStyle = { fontSize: "3rem", cursor: 'pointer' };

  return (
    <div className='likebutton' onClick={handleToggle}>
        {toggle ? <FcLike style={likeButtonStyle} /> : <FcLikePlaceholder style={likeButtonStyle} />  }
        
        
    </div>
  )
}

export default Likebutton