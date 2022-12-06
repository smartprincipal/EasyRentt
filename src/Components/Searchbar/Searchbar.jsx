import React from 'react'
import './Searchbar.css'
import searchicon from '../../Assets/search-icon.svg';

const Searchbar = ({searchdiv, imgsource, searchinput}) => {

  return (
    <div className={searchdiv}>
            <input type="search" name="search" id={searchinput} placeholder='Where do you want to live?.' />
            <img src={imgsource} alt="searchicon" className='searchicon'/>
    </div>
  )
}

export default Searchbar