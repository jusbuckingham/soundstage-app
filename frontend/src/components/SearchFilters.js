import React, { useState } from 'react';

function SearchFilters({ onSearch }) {
  const [searchCriteria, setSearchCriteria] = useState({
    city: '',
    state: '',
    country: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = () => {
    onSearch(searchCriteria);
  };

  return (
    <div>
      <div>
        <label htmlFor="city">City:</label>
        <select name="city" id="city" onChange={handleInputChange} value={searchCriteria.city}>
        <option value="">Select City</option>
          <option value="Atlanta">Atlanta</option>
          <option value="Albuquerque">Albuquerque</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <select name="state" id="state" onChange={handleInputChange} value={searchCriteria.state}>
        <option value="">Select State</option>
          <option value="California">California</option>
          <option value="Georgia">Georgia</option>
          <option value="New Mexico">New Mexico</option>
        </select>
      </div>
      <div>
      <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          onChange={handleInputChange}
          value={searchCriteria.startDate}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          onChange={handleInputChange}
          value={searchCriteria.endDate}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchFilters;