import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../resources/css/header.css';
import '../../resources/css/font.css';
import '../../resources/css/mobileHeader.css';
import MobileHeader from './MobileHeader';


class MobileHeaderBar extends Component {

    render() {
        return (
            <Navbar sticky="top" variant="light" style={{backgroundColor: "white"}}>
                <Nav>
                    <MobileHeader content={this.props.content} setLanguage={this.props.setLanguage}/>
                </Nav>
                <Nav className="m-auto">
                    <Navbar.Brand className="brand" href="/">Projektledningsbyrån</Navbar.Brand>
                </Nav>
            </Navbar>

        );
    };
}

export default MobileHeaderBar;


