// import { useState } from "react";
// import './Filter.css'



// const Filter = ({ handleFilter }) => {
//       const [handleFilter, sethandleFilter] = useState()
//     return(
//         <button
//         type="button" onClick={(e).target.handleFilter}>Male</button>
//     )
//     // {(e) => sethandleFilter(e.target.value)}

// }

// export default Filter;

import { useState } from "react";
import './Filter.css'

const Filter = ({ handleFilter }) => {

    return (
        <button type="button" onClick={handleFilter}>Male</button>
    );
}

export default Filter;