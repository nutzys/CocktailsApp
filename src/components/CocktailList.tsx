import React, { useContext } from 'react'
import CocktailContext from '../store/cocktailContext';
import CocktailCard from './CocktailCard';
import './CocktailList.css';

const CocktailList = () => {
  const {cocktails} = useContext(CocktailContext);
  if(typeof(cocktails) == null) return <h1>No results found...</h1>
  return (
    <div className='cocktail-container'>
      {cocktails?.map(cocktail => (<CocktailCard
      key={cocktail.idDrink}
      id={cocktail.idDrink}
      instructions={cocktail.strInstructions}
      name={cocktail.strDrink}
      glass={cocktail.strGlass}
      image={cocktail.strDrinkThumb}
      />))}
    </div>
  )
}

export default CocktailList
