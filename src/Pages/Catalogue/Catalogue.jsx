import React from 'react'
import './Catalogue.css'
// import NavBar from '../../Components/NavBar/navBar';
import SearchImg from '../../Assets/searchImg.png';
import Victoria from '../../Assets/Victoria.png';
import Lekki2 from '../../Assets/lekki2.png'
import Lekki from '../../Assets/lekki.png'
import Maryland from '../../Assets/maryland.png'
import Ajah from '../../Assets/ajah.png'
import Bed from '../../Assets/bed.svg'
import Bath from '../../Assets/bath.svg'
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard'
import Button from '../../Components/Button/Button'
import Review from '../../Components/Review/Review';

const Catalogue = () => {

  
    const catalogue= [
      
      {id:0, catalogueImg: Victoria, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`2`,catalogueBath:`2`, catalogueBathImg: Bath,   catalogueBedImg: Bed},
      
      {id:1, catalogueImg: Lekki2, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`5`, catalogueBath:`5`, catalogueBathImg:Bath,   catalogueBedImg: Bed},
      
      {id:2, catalogueImg: Lekki, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`1`, catalogueBath:`4`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},

      {id:3, catalogueImg: Maryland, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`7`, catalogueBath:`5`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},
      
      {id:4, catalogueImg: Ajah, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`3`, catalogueBath:`2`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},
      
      {id:5, catalogueImg: Victoria, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`5`, catalogueBath:`4`, catalogueBathImg:Bath,   catalogueBedImg: Bed}

    ]

    const moreStyle ={
      background: "#FCBC0E",
      width: "250px",
      height: "60px",
      fontFamily: "Inter",
      fontSize: "32px",
      fontWeight: "500px",
      lineHeight: "39px",
      textAlign: "center",
      color: "#FFF",
      border:"none"
    };


  return (
    <div className='calaogue'>

    {/* Hero section */}
     <section className="heroSection">

      {/* NavBar Import */} 
      <div className='navBarr'>
        {/* <NavBar/> */}
      </div>

      {/* Filter Section */}
      <div className="searchSection">

        {/* Select dropdown */}
        <select name="Price" id="Price" value='Price' className='ops'>
        <option value="Price">Price</option>
        </select>
        <select name="Bed" id="Bed" value='Bed' className='ops'>
        <option value="Bed">Bed</option>
        </select>
        <select name="Bathroom" id="Bathroom" value='Bathroom' className='ops'>
        <option value="Bathroom">Bathroom</option>
        </select>
        
        {/* Search Box */}
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

        {/* Sortby elect dropdown */}
        <div className="sortBy">
          <label htmlFor="">Sort by:</label>
          <select name="Best Match" id="Best Match" value='Best Match' className='opsort'>
        <option value="Best Match">Best Match</option>
        </select>
        </div>
      </div>
      
     </section>
     <section clasname='section2'>

      {/* Catalogue Card */}
     <div className="catalogueContainer">{
      catalogue.map((choice) => (
        <CatalogueCard 
        catalogueImg={choice.catalogueImg} 
        catalogueHead={choice.catalogueHead} 
        catalogueAmount={choice.catalogueAmount} 
        catalogueBedImg={choice.catalogueBedImg}
        catalogueBathImg={choice.catalogueBathImg}
        catalogueBed={choice.catalogueBed}
        catalogueBath={choice.catalogueBath}
        />
      ))
     }
     </div>
     </section>
      {/* Import Button */}
<div className="more">
  <Button style={moreStyle} text={"More"}/>
</div>

     <section className='section4'>
      <Review/>
     </section>




    </div>
  )
}

export default Catalogue