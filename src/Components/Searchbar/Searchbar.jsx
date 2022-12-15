import './Searchbar.css';
import { useState } from 'react';
import data from '../../SearchData.json'
import { Link } from 'react-router-dom';


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
      // const routeclick = () => {
      //   return <Link></Link>
      // }
  return (
    <div className='searchmaindiv'>
      <div className={searchdiv}>
              <input type="search" name="search" id={searchinput} placeholder='Where do you want to live?.' onChange={handleFilter} />
              <img src={imgsource} alt="searchicon" className='searchicon'/>
      </div>

      <div className='searchfilter'>
        {filteredData.length !== 0 && (
          <ul>
              {filteredData.map((item) => {
                  return(
  
                      <li key={item.id}>
                        <Link to={item.route}>{item.location}</Link>
                      </li>
                  )     
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Searchbar