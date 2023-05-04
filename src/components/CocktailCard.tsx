import React, { useContext } from 'react'
import './CocktailCard.css';
import { Link } from 'react-router-dom';
import CocktailContext from '../store/cocktailContext';

interface Props {
  name: string,
  image: string,
  instructions: string,
  glass: string,
  id: number
}

const Cocktail: React.FC<Props> = (props) => {

  return (
    <div className='card'>
      <div className="image-container">
        <img src={props.image} className='image'/>
      </div>
      <div className="text-container">
        <Link to={`/cocktails/${props.id}`} style={{ textDecoration: 'none', color: '#fff' }}>
         <h1>{props.name}</h1>
        </Link>
      </div>
    </div>
  )
}

export default Cocktail
