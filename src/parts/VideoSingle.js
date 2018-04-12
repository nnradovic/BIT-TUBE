import React, { Component, Fragment } from "react";
import { apiService } from "./../service/ApiService";

class VideoSingle extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    
  }
  getId = () => {

    this.props.sideClickList(this.props.index)
   

  };

  render() {
    return (
      <Fragment>
        <img onClick={this.getId} width="100%" src={this.props.props.image} />
      </Fragment>
    );
  }
}

export default VideoSingle;
