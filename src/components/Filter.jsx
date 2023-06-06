import { useState } from "react";
import './Filter.css'



const Filter = ({ handleFilter }) => {
       
    return(
        <button
        type="button" onClick={handleFilter}>Male</button>
    )

}

export default Filter;