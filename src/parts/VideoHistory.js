import React, { Component } from "react";
import Video from "./../entites/Video";
import { apiService } from "./../service/ApiService";
import VideoSingle from './VideoSingle'

class VideoHistory extends Component {
    constructor(props){
        super(props)
    }

    
    
    
    render(){
        console.log(this.props.history);
        return(
          <div className="col-m3">


               { this.props.history.reverse().map((video) =>{ return <VideoSingle props={video}   />
                    })} 
          </div>
      )
  }

}

export default VideoHistory;
// sideClickList = {this.props.sideClickApp}