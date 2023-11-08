// Define a functional component called SoundStageList that receives 'soundStages' as a prop
function SoundStageList({ soundStages }) {
  // Check if 'soundStages' is not defined or not an array
  if (!soundStages || !Array.isArray(soundStages)) {
    // If not, return a loading message
    return <div>Loading...</div>;
  }

  // If 'soundStages' is defined and is an array, render the following JSX
  return (
    <div>
      {/* Map through each 'studio' in the 'soundStages' array */}
      {soundStages.map((studio, index) => (
        <div key={index}>
          {/* Display the 'studio_name' */}
          <h2>{studio.studio_name}</h2>

          {/* Map through each 'soundStage' in the 'studio.sound_stages' array */}
          {studio.sound_stages.map((soundStage, stageIndex) => (
            <div key={stageIndex}>
              {/* Display the 'stage_number' */}
              <h3>Sound Stage {soundStage.stage_number}</h3>

              {/* Display the 'city', 'state', and 'country' */}
              <h3>City: {studio.city}</h3>
              <h3>State: {studio.state}</h3>
              <h3>Country: {studio.country}</h3>

              {/* Display available_dates */}
              <h4>Available Dates:</h4>
              <ul>
                {/* Map through each 'date' in the 'soundStage.available_dates' array */}
                {soundStage.available_dates.map((date, dateIndex) => (
                  <li key={dateIndex}>
                    {/* Display the 'start_date' */}
                    Start Date: {date.start_date}
                    {/* Display 'end_date' if it exists */}
                    {date.end_date && <span>, End Date: {date.end_date}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Export the SoundStageList component as the default export
export default SoundStageList;
