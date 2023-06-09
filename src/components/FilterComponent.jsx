import React, { useState } from 'react';

const FilterComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    // { id: 3, name: 'Option 3' },
  ];

  const handleFilterChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);

    // Filtrer les données en fonction de la valeur sélectionnée
    const filtered = data.filter((item) => {
      return option === '' || item.name === option;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <label htmlFor="filter-select">Vous recherchez </label>
      <select id="filter-select" value={selectedOption} onChange={handleFilterChange}>
        <option value="">Tous</option>
        <option value="Option 1">Homme</option>
        <option value="Option 2">Femme</option>
        {/* <option value="Option 3">Option 3</option> */}
      </select>
      {/* <p> {selectedOption}</p> */}

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;