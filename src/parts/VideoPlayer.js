import React, { Component, Fragment } from "react";
import {apiService} from './../service/ApiService'

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  

 apiService.getVideo()
 .then(videos=>{
    console.log(videos);
    
})


  }

  render() {
    return (
        <Fragment>
      <div className="container">
        <div className="row">
          <div className="col m8" >
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Wq7dkqGJKGE" ></iframe>
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default VideoPlayer


// {{frameborder="0"}} {{allow="autoplay}}; encrypted-media" {{allowfullscreen}}