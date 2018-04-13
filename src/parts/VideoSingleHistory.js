import React, { Component, Fragment } from "react";
import { apiService } from "./../service/ApiService";

class VideoSingleHistory extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  getId = () => {
   console.log(this.props.props.title);
   
    this.props.historyClickHistory(this.props.props.title)
     

  };

  render() {
    return (
      <Fragment>
        <div className="col m4"> 
        <img onClick={this.getId} width="100%" src={this.props.props.image} />
        </div>
      </Fragment>
    );
  }
}

export default VideoSingleHistory;
