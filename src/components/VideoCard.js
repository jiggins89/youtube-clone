// libraries
import React from 'react';
// styles
import '../styles/video-card.css'

const VideoCard = (props, onVideoClick) => {
  // console.log(props);
  return (
    <div
      className="my-item ui segment"
      onClick={() => props.onVideoClick(props.video)}
    >
      {/* Thumbnail image */}
      <img
        style={{marginRight: "2vw"}}
        className="ui image"
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.description}
      />
      {/* Video Description */}
      <div className="ui text">
        <p>{props.video.snippet.title}</p>
      </div>
    </div>
  );
}

export default VideoCard;
