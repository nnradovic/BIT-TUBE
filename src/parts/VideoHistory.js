import React, { Component, Fragment } from "react";
import Video from "./../entites/Video";
import { apiService } from "./../service/ApiService";
import VideoSingleHistory from './VideoSingleHistory'

class VideoHistory extends Component {
    constructor(props){
        super(props)
        console.log(props);
        
    }

    
    
    
    render(){
        console.log(this.props);
        return(
        <Fragment>
         
               { this.props.history.reverse().map((video) =>{ return <VideoSingleHistory props={video} historyClickHistory={this.props.historyClickApp}   />
                    })} 
       
       </Fragment>
      )
  }

}

export default VideoHistory;
// sideClickList = {this.props.sideClickApp}