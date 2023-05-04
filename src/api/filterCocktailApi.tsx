import axios from "axios";

export default function filterCocktail(input: string){
    return axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`).then(res => res.data.drinks);
}