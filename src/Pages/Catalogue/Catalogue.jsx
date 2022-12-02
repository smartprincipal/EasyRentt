import React, {useState} from 'react'
import './Catalogue.css'
import NavBar from '../../Components/NavBar/NavBar';
import SearchImg from '../../Assets/searchImg.png';
// import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard'
import Button from '../../Components/Button/Button'
import Review from '../../Components/Review/Review';
import Post from '../../Components/Post/Post';
import axios from 'axios';

const Catalogue = () => {

  const [availableSearch , setAvailableSearch] = useState('')
  const searches = () => {
    axios.get('https://easyrent.onrender.com/users/query') .then((response) => {
      setAvailableSearch(response.data)
    }
    )
  }
    const [toggle, setToggle] =useState('')
    // const [bedToggle, setBedToggle] =useState(true)
    // const [bathToggle, setBathToggle] =useState(true)

    const handlePrice = () => {
      // setToggle(!toggle)
      // !toggle && setBedToggle(bedToggle)
      // !toggle && setBathToggle(bathToggle)
      setToggle('price')
      if (toggle === 'price' ){
        setToggle('')
      }

    }
    const handleBed = () => {
      // setBedToggle(!bedToggle)
      // !bedToggle && setToggle(toggle)
      // !bedToggle && setBathToggle(bathToggle)
      // console.log('handledBed')
      setToggle('bed')
      if (toggle === 'bed' ){
        setToggle('')
    }
  }
    const handleBath = () => {
      // setBathToggle(!bathToggle)
      // toggle && setToggle(toggle)
      // bedToggle && setBedToggle(bedToggle)
      setToggle('bath')
      if (toggle === 'bath' ){
        setToggle('')
    } 
  }


  return (
    <div className='calaogue'>

    {/* Hero section */}
     <section className="heroSection">

      {/* NavBar Import */} 
      <div className='navBarr'>
        <NavBar/>
      </div>

      {/* Filter Section */}
      <div className="searchSection">

        {/* Select dropdown */}
        <div  className='ops' onClick={handlePrice}>
         <p>  Price 
          </p>
          <p>
          ▼
          </p>
        </div>
        <div className={toggle =='price' ? 'pricebox' : 'inactive'} >
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



        <div className='ops' onClick={handleBed}>
        <p> Bed 
          </p>
          <p>
          ▼
          </p>
        </div>
        <div className={toggle == 'bed' ?'bedBox': 'inactive'}>
          <div className="bedAmount">
            <div className="count">Any</div>
            <div className="count">Studio</div>
            <div className="count">1</div>
            <div className="count">2</div>
            <div className="count">3</div>
            <div className="count">4+</div>
          </div>

        </div>
       
        <div className='opss' onClick={handleBath}>
          Bathroom ▼
          </div>
          <div className={toggle == 'bath' ?  'bathroomBox':'inactive'} >
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
          onClick={searches}
          />
          
          <div className="searchimg">
            <img src={SearchImg} alt="" />
          </div>
        </div>
      </div>
      
     </section>
     <section clasname='section2'>

      {/* Catalogue Card */}
      <Post/>
     </section>

      

     <section className='section4'>
      <Review/>
     </section>




    </div>
  )
}

export default Catalogue