import React from 'react';
import video from '../../assets/bg-video.mp4'; // Adjust path as needed
import './GlobalVideoBackground.css';

const GlobalVideoBackground = () => {

    
  return (
    <div className="global-video-background">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="global-video-overlay"></div>
    </div>
  );
};

export default GlobalVideoBackground;
