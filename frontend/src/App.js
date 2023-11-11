// Importing React and its hooks
import React, { useState } from 'react';
// Importing Axios for HTTP requests
import axios from 'axios';
// Importing custom components
import SearchFilters from './components/SearchFilters';
import SoundStageList from './components/SoundStageList';

// Creating an Axios instance with a predefined base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Base URL for backend server
});

function App() {
  // State for storing sound stages data
  const [soundStages, setSoundStages] = useState([]);

  // Function to search sound stages based on criteria
  const searchSoundStages = async (searchCriteria) => {
    try {
      // Making a POST request to the backend with search criteria
      const response = await axiosInstance.post('/api/search', searchCriteria);
      // Updating the soundStages state with the response data
      // If response data is empty, set soundStages to an empty array
      setSoundStages(response.data.length ? response.data : []);
    } catch (error) {
      // Error handling for the POST request
      console.error(error);
    }
  };

  // Rendering the component
  return (
    <div>
      <h1>Soundstage Search</h1> {/* Title of the application */}
      {/* Render SearchFilters component, passing the search function as a prop */}
      <SearchFilters onSearch={searchSoundStages} />
      {/* Render SoundStageList component, passing the sound stages data as a prop */}
      <SoundStageList soundStages={soundStages} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
