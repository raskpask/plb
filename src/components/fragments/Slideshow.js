import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Image from 'react-bootstrap/Image';
import ImageWebP from 'react-image-webp';
import '../../resources/css/font.css';
import '../../resources/css/slideShow.css';

class Slideshow extends Component {
  render() {
    let textStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0%',
      left: '0%'
    };
    return (
      <div className="slide-container">
        <Fade {...this.props.fadeProperties}>
          {this.props.fadeImages.map((picture) =>
            <div className="each-fade">
              <div className="image-container" fluid>

                <ImageWebP className="add-text"
                  responsive
                  src={picture.img}
                  webp={picture.imgWebP}
                  alt={picture.alt}
                  className="d-block w-100"
                  fluid />
                <div style={textStyle} >
                  <h1 className="text-image">{this.props.slideshowText}</h1>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </div>
    )
  }
}

export default Slideshow;