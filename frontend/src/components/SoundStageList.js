import React from 'react';

function SoundStageList({ soundStages }) {
  // Check if soundStages is defined and is an array
  if (!soundStages || !Array.isArray(soundStages)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {soundStages.map((studio, index) => (
        <div key={index}>
          <h2>{studio.studio_name}</h2>
          {studio.sound_stages.map((soundStage, stageIndex) => (
            <div key={stageIndex}>
              <h3>Sound Stage {soundStage.stage_number}</h3>
              {/* Render other information here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SoundStageList;
