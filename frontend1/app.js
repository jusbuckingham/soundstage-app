import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchFilters, SoundStageList } from './components/SearchFilters';

function App() {
  const [soundStages, setSoundStages] = useState([]);
  
  const searchSoundStages = (searchCriteria) => {
    axios.post('/api/search', searchCriteria)
      .then((response) => {
        setSoundStages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Soundstage Search</h1>
      <SearchFilters onSearch={searchSoundStages} />
      <SoundStageList soundStages={soundStages} />
    </div>
  );
}

export default App;
