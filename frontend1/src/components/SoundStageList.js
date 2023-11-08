import React from 'react';

function SoundStageList({ soundStages }) {
  return (
    <div>
      <h2>Available Sound Stages</h2>
      <ul>
        {soundStages.map((stage) => (
          <li key={stage.id}>
            {stage.name} - {stage.location} - Available: {stage.availableDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { SoundStageList };
