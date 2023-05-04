import React, { useContext, useState } from 'react'
import CocktailList from './CocktailList'
import './Home.css';
import { HiSearch } from "react-icons/hi";
import CocktailContext from '../store/cocktailContext';
const Home = () => {
  const {setSearchValue} = useContext(CocktailContext);
  return (
    <div className='home-container'>
      <div className="search-container">
        <div className="search-input">
          <HiSearch className='icons'/>
          <input type='text' className='input-field' onChange={e => setSearchValue(e.target.value)} placeholder='Search a drink...'/>
        </div>
      </div>
      <CocktailList/>
    </div>
  )
}

export default Home
