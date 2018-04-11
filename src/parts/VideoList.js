import React, { Component } from "react";
import Video from "./../entites/Video";
import { apiService } from "./../service/ApiService";
import VideoSingle from './VideoSingle'

class VideoList extends Component {
    
    constructor(props) {
        
        super(props);
        console.log(props.videos);
    this.state = {
        videos : [],
    };
}



  render(){
      return(
          <div>
                {this.state.videos.slice(1,this.state.videos.length).map(video =>{ 
                return <VideoSingle props={video}/>
                })}
          </div>
      )
  }

}

export default VideoList;
