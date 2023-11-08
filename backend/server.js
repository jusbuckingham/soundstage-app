const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use process.env.PORT for production deployment

app.use(express.json());

// Sample dataset
const stageData = require('./stage_data.json');

app.post('/api/search', (req, res) => {
  const { city, state, country, startDate, endDate } = req.body;

  const filteredStages = stageData.filter((stage) => {
    return (
      (!city || stage.city.toLowerCase() === city.toLowerCase()) &&
      (!state || stage.state.toLowerCase() === state.toLowerCase()) &&
      (!country || stage.country.toLowerCase() === country.toLowerCase()) &&
      (!startDate || !endDate || (stage.availableDate >= startDate && stage.availableDate <= endDate))
    );
  });

  res.json(filteredStages);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
