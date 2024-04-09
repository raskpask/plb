import React, { Component } from 'react';

import '../resources/css/slideShow.css';
import Post from './fragments/Post';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alt: [
                "Trust image",
                "Core Values image",
                "Planning image",
                "Safety image"
            ],
            images: [
                {
                    img: require("../resources/img/about/handshake.jpg"),
                    imgWebP: require("../resources/img/about/handshake.WebP"),
                },
                {
                    img: require("../resources/img/about/trust.jpg"),
                    imgWebP: require("../resources/img/about/trust.WebP"),
                },
                {
                    img: require("../resources/img/about/planing.jpg"),
                    imgWebP: require("../resources/img/about/planing.WebP"),
                },
                {
                    img: require("../resources/img/about/helmet.jpg"),
                    imgWebP: require("../resources/img/about/helmet.WebP"),
                },
            ],
            altSigil: "UC sigil highest rating",
        }
    }

    render() {
        return (<div>
            <Post image={this.state.images[0]} title={this.props.content.listFactsTitle} list={this.props.content.listFacts} imagePosition="right" sigil={this.props.sigil} alt={this.state.alt[0]} altSigil={this.state.altSigil} />
            <Post image={this.state.images[1]} title={this.props.content.listValuesTitle} list={this.props.content.listValues} carouselSettings={this.state.carouselSettings} imagePosition="left" alt={this.state.alt[1]} />
            <Post image={this.state.images[2]} title={this.props.content.listIdeaTitle} list={this.props.content.listIdea} imagePosition="left" alt={this.state.alt[2]} />
            <Post image={this.state.images[3]} text={this.state.textGallerySlussen} title={this.props.content.listSystemTitle} list={this.props.content.listSystem} imagePosition="right" alt={this.state.alt[3]} />
        </div>);

    };

}

export default About;