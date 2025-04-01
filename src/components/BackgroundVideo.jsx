import React from "react";
import "../css/Backgroundvideo.css"
const BackgroundVideo = () => {
    return (
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/background.webm" type="video/webm" />
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div> {/* Overlay for better text visibility */}
      </div>
    );
  };
  
  export default BackgroundVideo;