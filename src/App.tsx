import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import SingleCocktail from './components/SingleCocktail';
import RandomCocktailList from './components/RandomCocktailList';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='about' element={<About/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='cocktails/:id' element={<SingleCocktail/>}/>
          <Route path='cocktails/random' element={<RandomCocktailList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
