import React from 'react'
import './Searchbar.css'
import searchicon from '../../Assets/search-icon.svg';

const Searchbar = ({searchdiv, imgsource}) => {

  return (
    <div className={searchdiv}>
            <input type="search" name="search" id="herosearch" placeholder='Where do you want to live?.' />
            <img src={imgsource} alt="searchicon" className='searchicon'/>
    </div>
  )
}

export default Searchbar