import React from 'react';

import '../styles/video-player.css';

const VideoPlayer = ({video}) => {
  if (!video) {
    return (
      <div className="sixteen wide column">
        <div className="ui segment" style={{marginBottom: "5%", width: "100%"}} >
          <img
            style={{width: "100%"}}
            src="https://i.ytimg.com/vi/T7TJH5MF74s/maxresdefault.jpg"
            alt="youtube logo"
          />
        </div>
      </div>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="ten wide column">
      {/* Embedded youtube player */}
      <div className="ui segment" style={{marginBottom: "2%"}}>
        <div className="ui embed">
          <iframe
            title={video.id.videoId}
            src={videoSrc}
            frameBorder="0">
          </iframe>
        </div>
      </div>
      {/* Video Details */}
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
