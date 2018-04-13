import React, { Component, Fragment } from "react";
import "./App.css";
import VideoPlayer from "./parts/VideoPlayer";
import VideoList from "./parts/VideoList";
import Search from "./parts/Search";
import { apiService } from "./service/ApiService";
import VideoHistory from './parts/VideoHistory'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      videos: [],
      defaultVideos: "javascript",
      history:[]

    };
  }
// Loading on beginig 5 default videos
  componentDidMount() {
    apiService.getVideo(this.state.defaultVideos).then(videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
//Side click on image and set history image
  sideClick = id => { 
    this.state.history.push(this.state.videos[id])
    this.setState({
      selectedVideo: this.state.videos[id],
    });
    
  }

  //Start from history
 historyClick = title =>{
  apiService.getVideo(title).then(query => {
    this.setState({
      selectedVideo: query[0]
    });
  });
 }
//Callback function for search
  onHandleChange = searchInput => {
    apiService.getVideo(searchInput).then(query => {
      this.setState({
        videos: query,
        selectedVideo: query[0]
      });
    });
  };

  render() {
    if (this.state.videos.length === 0) {
      return <h4>Loading...</h4>;
    }
  

    return (
      <Fragment>
        <Search props={this.onHandleChange} />
        <div className="container">
          <div className="row">
            <div className="col m7">
              {this.state.selectedVideo && (
                <VideoPlayer selectedVideo={this.state.selectedVideo} />
              )}
            </div>
            <div className="col m2 push-m3">
              <VideoList
                videos={this.state.videos}
                sideClickApp={this.sideClick}
              />
            </div>
          </div>
          <div className="row">
            <h4> History </h4>


              <VideoHistory history={this.state.history} historyClickApp={this.historyClick}/> 
               
 
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
