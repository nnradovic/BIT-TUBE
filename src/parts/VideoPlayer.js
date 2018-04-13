import React, { Component, Fragment } from "react";
import { apiService } from "./../service/ApiService";

class VideoPlayer extends Component {
  
  constructor(props) {
    super(props);
  } 
  
  

  render() {
    // console.log(this.props)
    return (
      <Fragment>
        <iframe 
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
        />
        <h4>{this.props.selectedVideo.title}</h4>
        <p>{this.props.selectedVideo.description}</p>
      </Fragment>
    );
  }
}

export default VideoPlayer;

// {{frameborder="0"}} {{allow="autoplay}}; encrypted-media" {{allowfullscreen}}
