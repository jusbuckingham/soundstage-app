// Import React and necessary hooks from the 'react' library
import React, { useState, useEffect } from 'react';

// Import Axios for making HTTP requests to the backend server
import axios from 'axios';

// Import custom components
import SearchFilters from './components/SearchFilters';
import SoundStageList from './components/SoundStageList';

// Create an Axios instance with a base URL pointing to your backend server
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Update with your backend server URL
});

// Define the main component, App
function App() {
  // Define a state variable 'soundStages' and a function 'setSoundStages' to update it
  const [soundStages, setSoundStages] = useState([]);

  // Define a function 'searchSoundStages' that takes 'searchCriteria' as an argument
  const searchSoundStages = (searchCriteria) => {
    // Send a POST request to the backend's /api/search endpoint with search criteria
    axiosInstance
      .post('/api/search', searchCriteria)
      .then((response) => {
        // Check if the response contains data and it's an array with length > 0
        if (response.data && response.data.length > 0) {
          // Update 'soundStages' state with the received data
          setSoundStages(response.data);
        } else {
          // Handle the case when the response is empty, e.g., display a message
          setSoundStages([]);
        }
      })
      .catch((error) => {
        // Handle errors, e.g., log them to the console
        console.error(error);
      });
  };

  // // Use the useEffect hook to perform an action when the component mounts
  // useEffect(() => {
  //   // Fetch and display all available sound stages when the app starts
  //   axiosInstance
  //     .get('/api/soundstages') // Send a GET request to the /api/soundstages endpoint
  //     .then((response) => {
  //       // Check if the response contains data and it's an array with length > 0
  //       if (response.data && response.data.length > 0) {
  //         // Update 'soundStages' state with the received data
  //         setSoundStages(response.data);
  //       } else {
  //         // Handle the case when the response is empty, e.g., display a message
  //         setSoundStages([]);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle errors, e.g., log them to the console
  //       console.error(error);
  //     });
  // }, []); // The empty dependency array ensures this effect runs only once on mount

  // Render the component's JSX
  return (
    <div>
      {/* Render a title */}
      <h1>Soundstage Search</h1>
      
      {/* Render the SearchFilters component and pass the 'searchSoundStages' function */}
      <SearchFilters onSearch={searchSoundStages} />

      {/* Render the SoundStageList component and pass the 'soundStages' state */}
      <SoundStageList soundStages={soundStages} />
    </div>
  );
}

// Export the App component as the default export
export default App;
