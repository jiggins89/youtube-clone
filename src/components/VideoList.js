// libraries
import React from 'react';
// components
import VideoCard from './VideoCard';

const VideoList = (props, onVideoClick) => {
  // map call from api into an array of the information we need
  const renderedList = props.videos.map(video => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoClick={props.onVideoClick}
      />
    )
  });
  // render the info we need to the screen
  return (
    <div className="six wide column">
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    </div>
  );
}

export default VideoList;
