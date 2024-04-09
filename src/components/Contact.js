import React, { Component } from 'react'


import ContactCard from './fragments/ContactCard'
import GoogleMaps from './fragments/GoogleMaps';
import PostText from './fragments/PostText'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    img: require("../resources/img/contact/johan.jpg"),
                    imgWebP: require("../resources/img/contact/johan.WebP"),
                },
                {
                    img: require("../resources/img/contact/fredrik.jpg"),
                    imgWebP: require("../resources/img/contact/fredrik.WebP"),
                },
                {
                    img: require("../resources/img/contact/kim.jpg"),
                    imgWebP: require("../resources/img/contact/kim.WebP"),
                },  
            ],
        }
    }
    render() {
        return (<div>
            <ContactCard email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" image={this.state.images[0]} title="Johan Hedenström" />
            <ContactCard email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" image={this.state.images[1]}  title="Fredrik Molin" />
            <ContactCard email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" image={this.state.images[2]}  title="Kim Jangholm" />
            <GoogleMaps title={this.props.content.mapsTitle} />
        </div>);

    };
}

export default Contact;