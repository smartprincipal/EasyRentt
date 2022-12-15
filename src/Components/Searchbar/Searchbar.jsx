import './Searchbar.css';
import { useState } from 'react';
import data from '../../SearchData.json'


const Searchbar = ({searchdiv, imgsource, searchinput}) => {

    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (e) => {
        const wordSearch = e.target.value;
        const newFilter = data.filter((item) => {
            return item.location.toLowerCase().includes(wordSearch.toLowerCase());
        });
        setFilteredData(newFilter);

        if(wordSearch === ""){
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        };


    };

  return (
    <div className={searchdiv}>
            <input type="search" name="search" id={searchinput} placeholder='Where do you want to live?.' />
            <img src={imgsource} alt="searchicon" className='searchicon'/>
    </div>
  )
}

export default Searchbar