import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ImageWebP from 'react-image-webp';

import "../../resources/css/post.css";
import "../../resources/css/font.css";

class Post extends Component {
  renderImageSelector = () => {
    return <Fragment>
      {this.props.imgText == null ? this.renderImage() : this.renderImageWithCaption()}
    </Fragment>
  }
  renderImageWithCaption = () => {
    return <Col className="align-center">
      <ImageWebP
        style={{ padding: "2vw 2vw 1vw 2vw" }}
        className="d-block w-100"
        src={this.props.image.img}
        webp={this.props.image.imgWebP}
        alt={this.props.alt}
      />
      <p
        style={{ paddingLeft: "2vw", paddingBottom: "1vw" }}
        className="post-standard-text">
        {this.props.imgText}
      </p>
    </Col>
  }
  renderImage = () => {
    return <Col className="align-center">
      <ImageWebP
        style={{ padding: "2vw 2vw 2vw 2vw" }}
        className="d-block w-100"
        src={this.props.image.img}
        webp={this.props.image.imgWebP}
        alt={this.props.alt}
      />
    </Col>
  }
  renderList = () => {
    return <ul style={{ listStyleType: "none", padding: "0" }}>
      {this.props.list.map(item => (<li
        key={item}
        className="post-standard-text"
        style={{ marginTop: "3vh", lineHeight: "100%" }}
      >{item}
      </li>))}
    </ul>
  }
  renderHeader = () => {
    return <h1 className="post-standard-header">{this.props.title}</h1>
  }
  renderSigil = () => {
    return <a
      className="post-standard-header"
      href={this.props.sigil.href}
      title={this.props.sigil.title}
      target=" _blank">
      <img
        src={this.props.sigil.src}
        alt={this.props.altSigil}
      />
    </a>
  }
  renderText = () => {
    return <p className="post-standard-text" >{this.props.text}</p>
  }

  render() {
    return (
      <Container fluid className="box-layout bottom-border">
        <Row>
          {this.props.imagePosition == "left" ? this.renderImageSelector() : ""}
          <Col className="text-center">
            <Container style={{ padding: "50px 100px 50px 100px" }}>
              {this.renderHeader()}
              {this.props.list ? this.renderList() : this.renderText()}
              {!this.props.sigil ? "" : this.renderSigil()}
            </Container>
          </Col>
          {this.props.imagePosition == "right" ? this.renderImageSelector() : ""}
        </Row>
      </Container>
    );
  }
}

export default Post;