import React from 'react';
import './Videocard.css';

const VideoCard = ({ video }) => {
  // Default data if video is not available
  const defaultVideo = {
    thumbnailUrl: 'https://example.com/default-thumbnail.jpg',
    title: 'Default Title',
    description: 'Default Description',
    date: 'January 1, 2023',
  };

  // Use the provided video or default video if not available
  const currentVideo = video || defaultVideo;

  return (
    <div className="video-card">
      <img src={currentVideo.thumbnailUrl} alt="Video Thumbnail" />
      <div className="video-details">
        <h3>{currentVideo.title}</h3>
        <p>{currentVideo.description}</p>
        <p className="date">{currentVideo.date}</p>
      </div>
    </div>
  );
};

export default VideoCard;
