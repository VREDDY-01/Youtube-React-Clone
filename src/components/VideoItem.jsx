import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  
  return (
    <div onClick={()=>onVideoSelect(video)} className="item video-item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content">
        <div className="header"> <p style={{fontSize:"12px"}}>{video.snippet.title}</p></div>
      </div>
    </div>
  );
};

export default VideoItem;
