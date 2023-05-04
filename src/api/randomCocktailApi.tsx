import axios from "axios";

export default function getRandomCocktail(){
    return axios.get('https://thecocktaildb.com/api/json/v1/1/random.php').then(res => res.data.drinks);
}