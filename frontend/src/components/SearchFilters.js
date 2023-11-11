import React, { useState } from 'react';

// Constants for city and state options
const CITY_OPTIONS = ["Atlanta", "Albuquerque", "Los Angeles"];
const STATE_OPTIONS = ["California", "Georgia", "New Mexico"];

function SearchFilters({ onSearch }) {
  // State to keep track of the current search criteria
  const [searchCriteria, setSearchCriteria] = useState({
    city: '',
    state: '',
    country: '',
    startDate: '',
    endDate: '',
  });

  // Function to handle changes in the search input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Updating the searchCriteria state with new values
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  // Rendering the search filter form
  return (
    <div>
      {/* City Selection */}
      <div>
        <label htmlFor="city">City:</label>
        <select name="city" id="city" onChange={handleInputChange} value={searchCriteria.city}>
          <option value="">Select City</option>
          {/* Mapping through CITY_OPTIONS to render city options */}
          {CITY_OPTIONS.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>
      {/* State Selection */}
      <div>
        <label htmlFor="state">State:</label>
        <select name="state" id="state" onChange={handleInputChange} value={searchCriteria.state}>
          <option value="">Select State</option>
          {/* Mapping through STATE_OPTIONS to render state options */}
          {STATE_OPTIONS.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>
      {/* Start Date Input */}
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
      {/* End Date Input */}
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
      {/* Search Button */}
      <button onClick={() => onSearch(searchCriteria)}>Search</button>
    </div>
  );
}

export default SearchFilters;
