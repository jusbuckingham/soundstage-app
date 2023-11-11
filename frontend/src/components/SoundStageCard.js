import React from 'react';

function SoundStageCard({ stage }) {
  // This component takes a 'stage' object as a prop and displays its details
  return (
    // Card container
    <div className="card mb-4">
      <div className="card-body">
        {/* Displaying the studio name */}
        <h2 className="card-title">{stage.studio_name}</h2>

        {/* Displaying the city */}
        <h3 className="mb-1"><strong>City:</strong> {stage.city}</h3>

        {/* Displaying the state */}
        <h3 className="mb-1"><strong>State:</strong> {stage.state}</h3>

        {/* Displaying the country */}
        <h3 className="mb-1"><strong>Country:</strong> {stage.country}</h3>

        {/* Displaying the sound stage number */}
        <h3 className="mb-1"><strong>Sound Stage:</strong> {stage.stage_number}</h3>

        {/* Section for matching dates */}
        <h4 className="mt-3">Matching Dates:</h4>
        <ul className="list-unstyled">
          {/* Mapping over the matching_dates array to display each date */}
          {stage.matching_dates.map((date, index) => (
            <li key={index} className="mb-3">
              {/* Displaying the start date */}
              <div>
                <strong>Start Date:</strong> {date.start_date}
              </div>
              {/* Conditionally displaying the end date if it exists */}
              {date.end_date && (
                <div>
                  <strong>End Date:</strong> {date.end_date}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SoundStageCard;
