import React, { useState } from 'react';

function SearchFilters({ onSearch }) {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Create a searchCriteria object with the filter values
    const searchCriteria = {
      city: city.trim(),
      state: state.trim(),
      country: country.trim(),
      startDate: startDate.trim(),
      endDate: endDate.trim(),
    };

    // Pass the search criteria to the parent component for searching
    onSearch(searchCriteria);
  };

  return (
    <div>
      <h2>Search Filters</h2>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchFilters;
