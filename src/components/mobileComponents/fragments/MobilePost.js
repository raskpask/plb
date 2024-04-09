import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ImageWebP from 'react-image-webp';

import '../../../resources/css/mobilePost.css';
import '../../../resources/css/font.css';

class MobilePosts extends React.Component {
    renderImage = () => {
        return (
            <div>
                <ImageWebP style={{ objectFit: "cover" }}
                    className="d-block w-100"
                    src={this.props.image.img}
                    webp={this.props.image.imgWebP}
                    alt={this.props.alt}
                />
                <p class="post-mobile-text" style={{ padding: "2vw 2vw 0vw 2vw" }} >
                    {this.props.imgText ? this.props.imgText : ""}
                </p>
            </div>
        );
    }
    renderText = () => {
        return (
            <Container class="box-layout bottom-border" style={{ padding: "10vh 10vw 10vh 10vw" }}>
                <h1 className="post-standard-header" style={this.props.contact ? { textAlign: "center" } : {}}>{this.props.title}</h1>
                <ul style={{ listStyleType: "none", padding: "0" }}>
                    {this.props.list ? this.props.list.map((item) => <li className="post-standard-text" style={{ marginTop: "2vh", lineHeight: "100%" }}>{item}</li>) : ""}
                </ul>
                <p class="post-mobile-text">
                    {this.props.text ? this.props.text : ""}
                </p>
                {this.props.sigil
                    ?
                    <a className="post-standard-header " href={this.props.sigil.href} title={this.props.sigil.title} target=" _blank">
                        <img
                            src={this.props.sigil.src}
                            alt={this.props.altSigil}
                        />
                    </a>
                    :
                    ""
                }
                {this.props.email ? <a className="post-mobile-text contact-links" style={this.props.contact ? { padding: "-10px 20px 0px 20px", display: "block", textAlign: "center" } : { padding: "-10px 20px 0px 20px", display: "block" }} href={"mailto:" + this.props.email}>{this.props.email}</a> : ""}
                {this.props.phone ? <a className="post-mobile-text contact-links" style={this.props.contact ? { padding: "-10px 20px 0px 20px", display: "block", textAlign: "center" } : { padding: "-10px 20px 0px 20px", display: "block" }} href={"tel:" + this.props.phone}>{this.props.phone}</a> : ""}
            </Container>
        );
    }
    render() {
        return (
            <div>
                {this.props.state == "image" ? this.renderImage() : this.renderText()}
            </div>
        );
    }
}

export default MobilePosts;