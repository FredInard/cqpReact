import { useState } from "react";
import './Title.css'


const Title = () => {
    const [furstName, setfurstName] = useState('');
    console.log("Affiche moi:"+ setfurstName )
    
    // const handleInputChange = (event) => {
    //   setfurstName(event.target.value);}
  
    return (
    <div className="TitleBox">
      {/* <label htmlFor="myInput"></label> */}
      <p>Hello {furstName}</p>
      <input  className="input" 
              type="text" id="myInput"
              onChange={(e) => setfurstName(e.target.value)}
              // {handleInputChange}
              // {() => setfurstName(furstName )}
      />
    </div>
  );
}

export default Title;