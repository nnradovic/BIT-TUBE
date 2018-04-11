import React, { Component, Fragment } from "react";
import { apiService } from "./../service/ApiService";

class VideoPlayer extends Component {
  
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <Fragment>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
        />
      </Fragment>
    );
  }
}

export default VideoPlayer;

// {{frameborder="0"}} {{allow="autoplay}}; encrypted-media" {{allowfullscreen}}
