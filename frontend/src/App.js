import React, { useState } from 'react';
import axios from 'axios';
import { SearchFilters } from './components/SearchFilters';
import { SoundStageList } from './components/SoundStageList';

function App() {
  const [soundStages, setSoundStages] = useState([]);

  const searchSoundStages = (searchCriteria) => {
    axios
      .post('http://localhost:3001/api/search', searchCriteria)
      .then((response) => {
        setSoundStages(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error in a user-friendly way if needed
      });
  };

  return (
    <div>
      <h1>Soundstage Search</h1>
      <SearchFilters onSearch={searchSoundStages} />
      <SoundStageList soundStages={soundStages} />
    </div>
  );
}

export default App;
