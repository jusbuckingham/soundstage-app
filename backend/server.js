// Importing necessary modules
const express = require('express'); // Express framework for handling HTTP requests
const cors = require('cors'); // CORS middleware to enable cross-origin requests
const fs = require('fs'); // File System module to handle file operations

const app = express(); // Creating an instance of Express
const port = process.env.PORT || 3001; // Setting the port number, default to 3001 

// Middlewares
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enabling CORS for all routes

// Reading and parsing the stage data from a JSON file
const stageData = JSON.parse(fs.readFileSync('stage_data.json', 'utf8'));

// GET endpoint to retrieve all sound stages
app.get('/api/soundstages', (req, res) => {
  res.json(stageData); // Sending the stage data as a JSON response
});

// POST endpoint for searching sound stages based on criteria
app.post('/api/search', (req, res) => {
  try {
    // Extracting search criteria from the request body
    const { city, state, country, startDate, endDate } = req.body;

    // Filtering logic
    const filteredStages = stageData.flatMap(studio => studio.sound_stages.flatMap(soundStage => {
      // Filter available dates based on criteria
      const matchingDates = soundStage.available_dates.filter(date => {
        const availableStartDate = date.start_date;
        const availableEndDate = date.end_date === 'null' ? null : date.end_date;
        return (
          (!city || studio.city.toLowerCase() === city.toLowerCase()) &&
          (!state || studio.state.toLowerCase() === state.toLowerCase()) &&
          (!country || studio.country.toLowerCase() === country.toLowerCase()) &&
          (!startDate || startDate === '' || startDate <= availableEndDate) &&
          (!endDate || endDate === '' || endDate >= availableStartDate)
        );
      });

      // Returning the studio and stage details if there are matching dates
      if (matchingDates.length > 0) {
        return {
          studio_name: studio.studio_name,
          city: studio.city,
          state: studio.state,
          country: studio.country,
          stage_number: soundStage.stage_number,
          matching_dates: matchingDates,
        };
      } else {
        return [];
      }
    }));

    // Sending the filtered results as a JSON response
    res.json(filteredStages);
  } catch (error) {
    // Error handling
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; 