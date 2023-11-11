import React from 'react';
import SoundStageCard from './SoundStageCard';

function SoundStageList({ soundStages }) {
  // This component takes an array of sound stages as a prop
  return (
    // Container for the list of sound stage cards
    <div className="container mt-5">
      {/* Conditional rendering: Check if there are any sound stages */}
      {soundStages.length > 0 ? (
        // If there are sound stages, map over the array to render a card for each stage
        soundStages.map(stage => (
          // SoundStageCard component for each stage
          // Use a unique identifier like 'stage.id' as key if available, else fallback to 'stage.name'
          <SoundStageCard key={stage.id || stage.name} stage={stage} />
        ))
      ) : (
        // If there are no sound stages, display a message indicating this
        <p>No sound stages available.</p>
      )}
    </div>
  );
}

export default SoundStageList;
