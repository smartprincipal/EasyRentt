import React from 'react'
import './Catalogue.css'
// import NavBar from '../../Components/NavBar/navBar'
import SearchImg from '../../Assets/searchImg.png'

const Catalogue = () => {
  return (
    <div className='calaogue'>
     <div className="heroSection">
      <div className='navBarr'>
        {/* <NavBar/> */}
      </div>
      <div className="searchSection">
        <select name="Price" id="Price" value='Price' className='ops'>
        <option value="Price">Price</option>
        </select>
        <select name="Bed" id="Bed" value='Bed' className='ops'>
        <option value="Bed">Bed</option>
        </select>
        <select name="Bathroom" id="Bathroom" value='Bathroom' className='ops'>
        <option value="Bathroom">Bathroom</option>
        </select>
        
        <div className="catalogueSearch">
          <input 
          type="search" 
          name="Search" 
          id="" 
          className='searchBox' 
          placeholder='Where do you want to live'
          />
          
          <div className="searchimg">
            <img src={SearchImg} alt="" />
          </div>
        </div>
        <div className="sortBy">
          <label htmlFor="">Sort by:</label>
          <select name="Best Match" id="Best Match" value='Best Match' className='opsort'>
        <option value="Best Match">Best Match</option>
        </select>
        </div>
      </div>
      
     </div>


    </div>
  )
}

export default Catalogue