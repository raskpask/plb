import React, { Component } from "react";

import "../resources/css/slideShow.css";
import Slideshow from "./fragments/Slideshow";

class Home extends Component {
  render() {
    return (
      <Slideshow
        fadeProperties={this.props.fadeProperties}
        fadeImages={this.props.fadeImages}
      />
    );
  }
}

export default Home;
