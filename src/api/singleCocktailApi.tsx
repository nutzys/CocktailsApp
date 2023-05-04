import axios from "axios";

export default function getCocktailById(id: number){
    return axios.get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.data.drinks)
}