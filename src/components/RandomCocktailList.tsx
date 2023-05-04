import React from 'react'
import Cocktails from '../models/cocktailmodel';
import { useQuery } from 'react-query';
import getRandomCocktail from '../api/randomCocktailApi';
import RandomCocktail from './RandomCocktail';


const RandomCocktailList = () => {
    const {data: query} = useQuery('randomCocktail', getRandomCocktail,)
  return (
    <div>
      {query?.map((cocktail : Cocktails) => (<RandomCocktail
      key={cocktail.idDrink}
      name={cocktail.strDrink} 
      instructions={cocktail.strInstructions} 
      image={cocktail.strDrinkThumb}
      glass={cocktail.strGlass} 
      ingr1={cocktail.strIngredient1}
      ingr2={cocktail.strIngredient2}
      ingr3={cocktail.strIngredient3}
      ingr4={cocktail.strIngredient4}
      ingr5={cocktail.strIngredient5}
      ingr6={cocktail.strIngredient6}
      ingr7={cocktail.strIngredient7}
      ingr8={cocktail.strIngredient8}
      />))}
    </div>
  )
}

export default RandomCocktailList
