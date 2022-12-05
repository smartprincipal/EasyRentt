import React from 'react'
import './CatalogueNavbar.css';
import NavBar from '../NavBar/NavBar';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import Searchbar from '../Searchbar/Searchbar';
import searchicon from '../../Assets/search-icon2.svg';
import { TbCurrencyNaira } from 'react-icons/tb';

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
                        <MenuItem value='1'><TbCurrencyNaira />250,000 - 500,000</MenuItem>
                        <MenuItem value='2'><TbCurrencyNaira />500,000 - 1,000,000</MenuItem>
                        <MenuItem value='3'><TbCurrencyNaira />1,000,000 - 5,000,000</MenuItem>
                        <MenuItem value='4'><TbCurrencyNaira />5,000,000 - 10,000,000</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className='selectfilter'>
                    <InputLabel id="demo-simple-select-label">Beds</InputLabel>
                    <Select id="demo-simple-select"  label="Beds">
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='studio'>Studio</MenuItem>
                        <MenuItem value='bed1'>1</MenuItem>
                        <MenuItem value='bed2'>2</MenuItem>
                        <MenuItem value='bed3'>3</MenuItem>
                        <MenuItem value='bed4'>4+</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className='selectfilter'>
                    <InputLabel id="demo-simple-select-label">Baths</InputLabel>
                    <Select id="demo-simple-select"  label="Baths">
                        <MenuItem value='bath1'>1</MenuItem>
                        <MenuItem value='bath2'>2</MenuItem>
                        <MenuItem value='bath3'>3+</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='searchcompdiv'>
                <Searchbar searchdiv='inputdiv2' imgsource={searchicon} searchinput="herosearch2" />
            </div>
        </div>
    </div>
  )
}

export default CatalogueNavbar