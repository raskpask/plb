import React, { Component } from 'react'
import MobilePost from './fragments/MobilePost';

import GoogleMaps from '../fragments/GoogleMaps';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    img: require("../../resources/img/contact/johan.jpg"),
                    imgWebP: require("../../resources/img/contact/johan.WebP"),
                },
                {
                    img: require("../../resources/img/contact/fredrik.jpg"),
                    imgWebP: require("../../resources/img/contact/fredrik.WebP"),
                },
                {
                    img: require("../../resources/img/contact/kim.jpg"),
                    imgWebP: require("../../resources/img/contact/kim.WebP"),
                },  
            ],
        }
    }
    render() {
        return (<div>
            <MobilePost image={this.state.images[0]} state="image" alt="Johan Hedenström"/>
            <MobilePost email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" title="Johan Hedenström" contact={true}/>
            <MobilePost image={this.state.images[1]} state="image" alt="Fredrik Molin"/>
            <MobilePost email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" contact={true} title="Fredrik Molin" />
            <MobilePost image={this.state.images[2]} state="image" alt="Kim Jangholm"/>
            <MobilePost email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" contact={true} title="Kim Jangholm" />
            <GoogleMaps title={this.props.content.mapsTitle} mobile={true} contact={true} />
        </div>);

    };
}

export default Contact;