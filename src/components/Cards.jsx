import { useState } from "react";
import './Cards.css'



// const ChangeColor = (useState) => {
//     [Color, SetColor] = useState()

// }
console.log
const Cards = (Props) => {

    return(
        <div className="GlobalCard">
            <img src={Props.clef.img} alt={Props.clef.Name} />
            <h1 style= {{color:Props.clef.color}}> {Props.clef.Name}</h1>
            <p>{Props.clef.descrip}</p>
        </div>

)}

export default Cards;