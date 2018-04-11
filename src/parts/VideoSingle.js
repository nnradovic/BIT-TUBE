import React, { Component, Fragment } from "react";

class VideoSingle extends Component {
  constructor(props) {
    super(props);
   
    
   
   
    
  }

  render() {
    return (
      <Fragment>
        <img 
          width="100%"
         
          src={this.props.props.image}
        />
      </Fragment>
    );
  }
}

export default VideoSingle;