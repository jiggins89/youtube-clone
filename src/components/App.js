// libraries
import React from 'react';
// styles
import '../styles/app.css'
// configurations
import youtube from '../api/youtube';
// components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  callToApi = async userInput => {
    const apiResponse = await youtube.get('/search', {
      params: { q: userInput }
    });

    this.setState({
      selectedVideo: apiResponse.data.items[0],
      videos: apiResponse.data.items
    });
  }

  onVideoClick = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "20px"}}>
        {/* Grid system */}
        <div className="ui stackable four column grid">

          {/* Search Bar */}
          <div className="sixteen wide column">
            <SearchBar onFormSubmit={this.callToApi}/>
          </div>


            {/* Video Player */}
            <VideoPlayer video={this.state.selectedVideo}/>

            {/* Video List */}
            <VideoList
              onVideoClick={this.onVideoClick}
              videos={this.state.videos}
            />
          </div>


      </div>
    )
  }
}

export default App;
