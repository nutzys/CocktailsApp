import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CocktailContext from '../store/cocktailContext'
import { useQuery } from 'react-query';
import Cocktails from '../models/cocktailmodel';
import getCocktailById from '../api/singleCocktailApi';
import Cocktail from './Cocktail';

const SingleCocktail = () => {
    const {id} = useParams();
    const {data, isLoading} = useQuery(['cocktails', id], () => getCocktailById(Number(id)))
    if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
      {data.map((item: Cocktails) => <Cocktail 
      key={item.idDrink}
      name={item.strDrink} 
      instructions={item.strInstructions} 
      image={item.strDrinkThumb}
      glass={item.strGlass} 
      ingr1={item.strIngredient1}
      ingr2={item.strIngredient2}
      ingr3={item.strIngredient3}
      ingr4={item.strIngredient4}
      ingr5={item.strIngredient5}
      ingr6={item.strIngredient6}
      ingr7={item.strIngredient7}
      ingr8={item.strIngredient8}
      />)}
    </div>
  )
}

export default SingleCocktail
