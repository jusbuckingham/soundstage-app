import React, { useState } from 'react';

// Define a functional component called SearchFilters that receives 'onSearch' as a prop
function SearchFilters({ onSearch }) {
  // Define 'searchCriteria' state with initial values for 'city', 'state', and 'country'
  const [searchCriteria, setSearchCriteria] = useState({
    city: '',
    state: '',
    country: '',
  });

  // Handle input changes for 'city', 'state', and 'country' fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update 'searchCriteria' state with the new value
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  // Handle the search button click event
  const handleSearch = () => {
    // Call the 'onSearch' function with the current 'searchCriteria' as an argument
    onSearch(searchCriteria);
  };

  return (
    <div>
      <h2>Search Filters</h2>
      <div>
        <label htmlFor="city">City:</label>
        {/* Create a dropdown select for 'city' with options */}
        <select name="city" id="city" onChange={handleInputChange} value={searchCriteria.city}>
          <option value="">Select City</option>
          <option value="Atlanta">Atlanta</option>
          <option value="Albuquerque">Albuquerque</option>
          <option value="Los Angeles">Los Angeles</option>
          {/* Add more city options here */}
        </select>
      </div>
      <div>
        <label htmlFor="state">State:</label>
        {/* Create a dropdown select for 'state' with options */}
        <select name="state" id="state" onChange={handleInputChange} value={searchCriteria.state}>
          <option value="">Select State</option>
          <option value="California">California</option>
          <option value="Georgia">Georgia</option>
          <option value="New Mexico">New Mexico</option>
          {/* Add options for states */}
        </select>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        {/* Create a dropdown select for 'country' with options */}
        <select name="country" id="country" onChange={handleInputChange} value={searchCriteria.country}>
          <option value="">Select Country</option>
          <option value="United States of America">United States of America</option>
          {/* Add options for countries */}
        </select>
      </div>
      {/* Add a button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

// Export the SearchFilters component as the default export
export default SearchFilters;
