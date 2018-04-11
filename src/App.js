import React, { Component, Fragment } from "react";
import "./App.css";
import VideoPlayer from "./parts/VideoPlayer";
import VideoList from "./parts/VideoList";
import Search from "./parts/Search";
import { apiService } from "./service/ApiService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      videos: []
    };
  }  

  onHandleChange = searchInput => {
    apiService.getVideo(searchInput).then(query => {
      this.setState({
        videos: query,
        selectedVideo: query[0]
      });
    });
  };

  render() {
    return (
      <Fragment>
        <Search props={this.onHandleChange} />
        <div className="container">
          <div className="row">
            <div className="col m7">
              {this.state.selectedVideo && <VideoPlayer selectedVideo={this.state.selectedVideo} />}
            </div>
            <div className="col m2 push-m2">
            {this.state.videos && <VideoList videos={this.state.videos} />}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
