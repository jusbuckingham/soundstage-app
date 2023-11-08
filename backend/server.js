const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use process.env.PORT for production deployment
const cors = require('cors'); // Import the cors middleware

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Sample dataset
const stageData = require('./stage_data.json');

app.all('/api/search', (req, res) => {
  if (req.method === 'GET') {
    // Handle GET requests here (e.g., return data or a message)
    res.json({ message: 'GET request to /api/search' });
  } else if (req.method === 'POST') {
    try {
      const { city, state, country, startDate, endDate } = req.body;

      if (!city && !state && !country && !startDate && !endDate) {
        return res.status(400).json({ error: 'At least one valid search criterion is required.' });
      }

      const filteredStages = stageData.filter((stage) => {
        return (
          (!city || stage.city.toLowerCase() === city.toLowerCase()) &&
          (!state || stage.state.toLowerCase() === state.toLowerCase()) &&
          (!country || stage.country.toLowerCase() === country.toLowerCase()) &&
          (!startDate || !endDate || (stage.availableDate >= startDate && stage.availableDate <= endDate))
        );
      });

      res.json(filteredStages);
    } catch (error) {
      console.error('Error processing search:', error);
      res.status(500).json({ error: 'An internal server error occurred.' });
    }
  } else {
    // Handle other HTTP methods (e.g., PUT, DELETE) if needed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
