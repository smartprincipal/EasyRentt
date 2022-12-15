import React from 'react'
import { useState, useEffect } from 'react';
import './Allcatalogue.css';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar';
import Overview from '../../Components/Overview/Overview';
import Footer from '../../Components/Footer/Footer';
import Button from '../../Components/Button/Button'
import axios from 'axios';



const Maryland = () => {

    const [data, setData] = useState([])

    
    useEffect(() => {
        const getData = () => {
            try {
                axios
                .get('https://easyrent.onrender.com/users/query')
                .then((result) => { 
                    const {data:{users}} = result;
                    console.log(users);
                    setData(users); })
            } catch (error) {
                console.log(error)
            }
        };
        
        getData()
    }, []);



  return (
    <div className='maincatcardcontainer'>
        {/* <>
        <h3>{data[2].apartment_name}</h3>
        </> */}
        <h1>{data.users}</h1>
        {/* <div>

            {data.map((data, index) => {
                return (
                    <div key={index}>
                        <h3>{data.apartment_name}</h3>
                    </div>
                )
            })} 
        </div> */}
        <div>
            <CatalogueNavbar />
        </div>
        <h1 className='catcardheading'>Apartments</h1>
        <div className='cat-carddiv'>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv1' cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv2' cardtype='Suite 9 Bedroom'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv3'cardtype='Plant View Bedroom'/>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv4' cardtype='Magnolia Height'/>
        </div>
        <div className='cat-carddiv'>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv5' cardtype='Suite 9 Bedroom'/>
            <CatalogueCard location='Maryland' catcardmaindiv='catcardmaindiv6' cardtype='Magnolia Height'/>
        </div>
        <div className='buttoncontain'>
            <Button text='MORE' btnclass='catbutton' />
        </div>
        <div>
            <Overview heading='Maryland' />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Maryland