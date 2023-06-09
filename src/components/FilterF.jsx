import { useState } from "react";
import './FilterF.css'

const FilterF = ({ handleFilter }) => {

    return (
        <button type="button" onClick={handleFilter}>Female</button>
    );
}

export default FilterF;