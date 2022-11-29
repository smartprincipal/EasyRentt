import React from 'react'
import './CatalogueNavbar.css';
import NavBar from '../NavBar/NavBar';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import Searchbar from '../Searchbar/Searchbar';
import searchicon from '../../Assets/search-icon2.svg';

const CatalogueNavbar = () => {
  return (
    <div className='catnavbar'>
        <div className='navcontainer'>
            <NavBar />
        </div>
        
        <div className='filtercontainer'>
            <div>
                <FormControl className='selectfilter'>
                    <InputLabel id="demo-simple-select-label">Price</InputLabel>
                    <Select id="demo-simple-select"  label="Price">
                        <MenuItem value={1}>#250,000 - 500,000</MenuItem>
                        <MenuItem value={2}>#500,000 - 1,000,000</MenuItem>
                        <MenuItem value={3}>#1,000,000 - 5,000,000</MenuItem>
                        <MenuItem value={4}>#5,000,000 - 10,000,000</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className='selectfilter'>
                    <InputLabel id="demo-simple-select-label">Beds</InputLabel>
                    <Select id="demo-simple-select"  label="Beds">
                        <MenuItem value={1}>Any</MenuItem>
                        <MenuItem value={2}>Studio</MenuItem>
                        <MenuItem value={3}>1</MenuItem>
                        <MenuItem value={4}>2</MenuItem>
                        <MenuItem value={5}>3</MenuItem>
                        <MenuItem value={6}>4+</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className='selectfilter'>
                    <InputLabel id="demo-simple-select-label">Baths</InputLabel>
                    <Select id="demo-simple-select"  label="Baths">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3+</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Searchbar searchdiv='inputdiv2' imgsource={searchicon} />
            </div>
        </div>
    </div>
  )
}

export default CatalogueNavbar