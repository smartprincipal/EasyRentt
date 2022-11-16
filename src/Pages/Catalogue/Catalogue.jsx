import React from 'react'
import './Catalogue.css'
// import NavBar from '../../Components/NavBar/NavBar';
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
        <div  className='ops'>
         <p>  Price 
          </p>
          <p>
          ▼
          </p>
        </div>
        <div className="pricebox">
        <div className="price">
          <button className="minPrice">
            <div className="symbol">
              ₦
            </div>
            <div className="min">
              Min-Price
            </div>
          </button>
          <div className="symbols">
            -
          </div>
          <button className="maxPrice">
          <div className="symbol">
              ₦
            </div>
            <div className="min">
              Max-Price
            </div>
          </button>
        </div>
        <div className="priceAmount">
          <div className="minmaxAmount">
            <th>
              No Min
            </th>
              <tr>150,000</tr>
              <tr>170,000</tr>
              <tr>200,000</tr>
              <tr>250,000</tr>
              <tr>300,000</tr>
          </div>
          <div className="minmaxAmount">
            <th>
              No Max
            </th>
              <tr>150,000</tr>
              <tr>170,000</tr>
              <tr>200,000</tr>
              <tr>250,000</tr>
              <tr>300,000</tr>
          </div>
        </div>
        </div>



        <div className='ops'>
        <p> Bed 
          </p>
          <p>
          ▼
          </p>
        </div>
        <div className="bedBox">
          <div className="bedAmount">
            <div className="count">Any</div>
            <div className="count">Studio</div>
            <div className="count">1</div>
            <div className="count">2</div>
            <div className="count">3</div>
            <div className="count">4+</div>
          </div>

        </div>
       
        <div className='opss'>
          Bathroom ▼
          </div>
          <div className="bathroomBox">
            <div className="bathroomAmount">
              <div className="bathroomCount">1</div>
              <div className="bathroomCount">2</div>
              <div className="bathroomCount">3</div>
            </div>

          </div>
        
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

        {/* Sortby elect dropdown
        <div className="sortBy">
          <label htmlFor="">Sort by:</label>
          <select name="Best Match" id="Best Match" value='Best Match' className='opsort'>
        <option value="Best Match">Best Match</option>
        </select>
        </div> */}
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