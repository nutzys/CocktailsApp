import axios from "axios";

export default function getCocktails(){
    return axios.get('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(res => res.data.drinks);
}