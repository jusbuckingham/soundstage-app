import React from 'react';

function SoundStageList({ soundStages }) {
  // Check if soundStages is defined and is an array
  if (!soundStages || soundStages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      {soundStages.map((stage, index) => (
        <div key={index} className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">{stage.studio_name}</h2>
            <h3 className="mb-1"><strong>City:</strong> {stage.city}</h3>
            <h3 className="mb-1"><strong>State:</strong> {stage.state}</h3>
            <h3 className="mb-1"><strong>Country:</strong> {stage.country}</h3>
            <h3 className="mb-1"><strong>Sound Stage:</strong> {stage.stage_number}</h3>
            <h4 className="mt-3">Available Dates:</h4>
            <ul className="list-unstyled">
              <li>
                <strong>Start Date:</strong> {stage.start_date}
                {stage.end_date && <span>, <strong>End Date:</strong> {stage.end_date}</span>}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SoundStageList;
