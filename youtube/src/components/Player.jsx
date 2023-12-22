// VideoPlayerComponent.js

import React, { useState, useEffect } from 'react';

const Player = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Fetch video data from Django backend
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`/api/video/${videoId}/play/`);
        const data = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const videoUrl = `/api/video/${videoId}/play/`;

  return (
    <div>
      <h2>{videoData.title}</h2>
      <p>{videoData.description}</p>

      <video controls width="100%" height="auto">
        <source src={videoUrl} type={videoData.file_type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Player;
