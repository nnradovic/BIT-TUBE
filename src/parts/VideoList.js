import React, { Component } from "react";
import Video from "./../entites/Video";
import { apiService } from "./../service/ApiService";
import VideoSingle from './VideoSingle'

class VideoList extends Component {
    

    
    
    
    render(){
        // console.log(this.props.videos.id);
        return(
          <div>
                {this.props.videos.map((video, index) =>{ 
                    
                return <VideoSingle props={video}  index={index}  sideClickList = {this.props.sideClickApp} />
                })}
          </div>
      )
  }

}

export default VideoList;
