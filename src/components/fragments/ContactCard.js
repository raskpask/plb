import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImageWebP from 'react-image-webp';

import "../../resources/css/font.css";
import "../../resources/css/contactCard.css";

class ContactCard extends Component {
  render() {
    return (
      <Container
        style={{ padding: "0" }}
        fluid
        className="contact-box-layout bottom-border"
      >
        <Row style={{height:"100%", padding:"50px 50px 50px 50px"}}>
          <Col md={6} style={{ height: "100%",textAlign:"right" }}>
            <ImageWebP
              style={{maxHeight:"100%"}}
              src={this.props.image.img}
              webp={this.props.image.imgWebP}
              alt={this.props.title}
            />
          </Col>
          <Col md={6}>
            <Row style={{textAlign:"left"}}>
              <Container style={{textAlign:"left", margin:"0 0 0 0px", padding:"100px 0 0 5vw"}}>
                <h1 className="post-standard-header">{this.props.title}</h1>
                <a
                  className="post-standard-text contact-links"
                  style={{ display: "block" }}
                  href={"mailto:" + this.props.email}
                >
                  {this.props.email}
                </a>
                <a
                  className="post-standard-text contact-links"
                  style={{ display: "block" }}
                  href={"tel:" + this.props.phone}
                >
                  {this.props.phone}
                </a>
                {/* <p className="standard-text">{this.props.text}</p> */}
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactCard;
