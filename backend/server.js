const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use process.env.PORT for production deployment
const cors = require('cors'); // Import the cors middleware
const fs = require('fs');

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Read the JSON data from the stage_data.json file
const stageData = JSON.parse(fs.readFileSync('stage_data.json', 'utf8'));

app.get('/api/soundstages', (req, res) => {
  // Send all available sound stages as the default data
  res.json(stageData);
});

app.post('/api/search', (req, res) => {
  const { city, state, country, startDate, endDate } = req.body;

  const filteredStages = [];

  for (const studio of stageData) {
    for (const soundStage of studio.sound_stages) {
      for (const availableDate of soundStage.available_dates) {
        if (
          (!city || studio.city.toLowerCase() === city.toLowerCase()) &&
          (!state || studio.state.toLowerCase() === state.toLowerCase()) &&
          (!country || studio.country.toLowerCase() === country.toLowerCase()) &&
          (!startDate || availableDate.start_date >= startDate) &&
          (!endDate || availableDate.end_date === null || availableDate.end_date <= endDate)
        ) {
          filteredStages.push({
            studio_name: studio.studio_name,
            city: studio.city,
            state: studio.state,
            country: studio.country,
            stage_number: soundStage.stage_number,
            start_date: availableDate.start_date,
            end_date: availableDate.end_date,
          });
        }
      }
    }
  }

  res.json(filteredStages);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
