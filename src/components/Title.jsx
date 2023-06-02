import { useState } from "react";
import './Title.css'


const Title = () => {
    const [furstName, setfurstName] = useState(0);
    console.log(furstName)
    return (
    <div className="TitleBox">
      <label htmlFor="myInput">Titre :</label>
      <input type="text" id="myInput" />
    </div>
  );

}

export default Title;