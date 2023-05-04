import React from 'react'
import './Cocktail.css';
interface Props {
    name: string,
    image: string,
    glass: string,
    instructions: string
    ingr1: string,
    ingr2: string,
    ingr3: string,
    ingr4: string,
    ingr5: string,
    ingr6: string,
    ingr7: string,
    ingr8: string,
}

const Cocktail: React.FC<Props> = (props) => {
  return (
    <div className="big-container">
        <div className='card-containers'>
        <div className="image-containers">
            <img src={props.image}/>
        </div>
        <div className="text-containers">
            <h1>{props.name}</h1>
            <p><span>Glass</span> {props.glass}</p>
            <p><span>Instructions</span> {props.instructions}</p>
            <div className="ingredients">
                <span>{props.ingr1}</span>
                <span>{props.ingr2}</span>
                {props.ingr3 && <span>{props.ingr3}</span>}
                {props.ingr4 && <span>{props.ingr4}</span>}
                {props.ingr5 && <span>{props.ingr5}</span>}
                {props.ingr6 && <span>{props.ingr6}</span>}
                {props.ingr7 && <span>{props.ingr7}</span>}
                {props.ingr8 && <span>{props.ingr8}</span>}
            </div>
        </div>
            
        </div>  
    </div>
  )
}

export default Cocktail
