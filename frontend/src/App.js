import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchFilters from './components/SearchFilters';
import SoundStageList from './components/SoundStageList'; // Make sure to import SoundStageList correctly

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Change the port to match your server
});

function App() {
  const [soundStages, setSoundStages] = useState([]);

  const searchSoundStages = (searchCriteria) => {
    axiosInstance.post('/api/search', searchCriteria)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setSoundStages(response.data);
        } else {
          // Handle empty response, e.g., display a message
          setSoundStages([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    // You can optionally fetch and display all available sound stages when the app starts.
    axiosInstance.get('/api/soundstages')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setSoundStages(response.data);
        } else {
          // Handle empty response, e.g., display a message
          setSoundStages([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Soundstage Search</h1>
      <SearchFilters onSearch={searchSoundStages} />
      <SoundStageList soundStages={soundStages} />
    </div>
  );
}

export default App;
