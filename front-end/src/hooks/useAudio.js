import { useState, useEffect } from 'react';

// Import WaveSurfer
import WaveSurfer from 'wavesurfer.js';
// import Timeline from 'wavesurfer.js';

const useAudioPlayer = (containerRef, options) => {
  const [audioPlayer, setAudioPlayer] = useState(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',

      // Set a bar width
      barWidth: 3,
      // Optionally, specify the spacing between bars
      barGap: 3,
      // And the bar radius
      barRadius: 5,
      container: containerRef.current,
    });

    setAudioPlayer(ws);

    return () => {
      ws.destroy();
    };
  }, []);

  return audioPlayer;
};

export default useAudioPlayer;
