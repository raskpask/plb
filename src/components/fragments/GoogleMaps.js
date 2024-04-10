import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import '../../resources/css/googleMaps.css'
import '../../resources/css/post.css';
import '../../resources/css/font.css';

class GoogleMaps extends Component {
  render() {
    return (
      <Container fluid className="google-box-layout bottom-border" style={{ textAlign: "center", padding: "2vh" }}>
        <h1 className="post-standard-header" style={{ textAlign: "center" }}>{this.props.title ? this.props.title : ""}</h1>
        <iframe
          title='Map'
          width={this.props.mobile ? "350px" : "500px"}
          height={this.props.mobile ? "400px" : "500px"}
          id="gmap_canvas" src="https://maps.google.com/maps?ll=59.311522,18.077563&z=13&t=m&hl=en-SE&gl=US&mapclient=embed&q=%C3%96stg%C3%B6tagatan%2042%20116%2064%20Stockholm&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          style={{ display: "inlineBlock" }}
        />

      </Container>
    );
  }
}

export default GoogleMaps;