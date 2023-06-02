import { useState } from "react";
import './Cards.css'





const Cards = (Props) => {
    // const [furstName, setfurstName] = useState(0);
    console.log("Dans ma Props il y a : ", Props);
    return(
        <div className="GlobalCard">
            <img src={Props.img} alt="Image de Géralte de Rive" />
            <h1> {Props.name}</h1>
            <p>{Props.descrip}</p>
        </div>
  
)}

export default Cards;


{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRwX-WUgwG4I5h8doehakSvS2drmtAbVJ2A&usqp=CAU" alt="Image de Géralte de Rive" />
<h1> Geralt de Riv</h1>
<p>Geralt de Riv en polonais : Geralt z Rivii, aussi connu sous le nom de Loup blanc est un sorceleur.</p> */}