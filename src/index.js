// Go get react from the installed modules and give me access to it in this file
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBAuS89Fs2X28EP8EiQJc4a6oRhHwGqeq4';

// create new component. This component should produce some HTML
// ES6 syntax for function
// "Functional Component"
/*
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
*/


// Class base component used when we need the concept of 'state' in the component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => { // (videos) => is same as 'function(videos)'. This is a different videos than this.state
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } // {selectedVideo} is video:selectedVideo
          videos={this.state.videos} />
      </div>
      // JavaScript variable referenced with curly braces
    );
  }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
