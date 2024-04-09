import React, { Component, Fragment } from 'react';
import { slide as Menu } from 'react-burger-menu'
import Navbar from 'react-bootstrap/Navbar'
import '../../resources/css/header.css';
import '../../resources/css/font.css';
import '../../resources/css/mobileHeader.css';


class MobileHeader extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
                <Menu width={'75%'}>
                    <a id="brand" className="menu-item brand-mobile-header" href="/">Projektledningbyrån</a>
                    <a id="home" className="menu-item" href="/">{this.props.content.listLinks[0]}</a>
                    <a id="about" className="menu-item" href="/about">{this.props.content.listLinks[1]}</a>
                    <a id="project" className="menu-item" href="/project">{this.props.content.listLinks[2]}</a>
                    <a id="contact" className="menu-item" href="/contact">{this.props.content.listLinks[3]}</a>

                    <a id="swe" className="menu-item menu-item-lang0 nav-lang-font-color" lang="swe" onClick={(e)=> this.props.setLanguage(e.target.lang)}>SV</a>
                    <a id="eng" className="menu-item menu-item-lang1 nav-lang-font-color" lang="eng" onClick={(e)=> this.props.setLanguage(e.target.lang)}>ENG</a>
                </Menu>


        );
    };
}

export default MobileHeader;


