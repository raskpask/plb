import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import '../resources/css/header.css';
import '../resources/css/font.css';


class Header extends Component{
    render(){
        return (
        <Navbar   fixed="top" style={{backgroundColor: "white"}}variant="light">
            <Navbar.Brand className="brand" href="/">Projektledningsbyrån</Navbar.Brand>
            <Nav className="mr-auto navbar">
              <Nav.Link className="nav-font-color" href="/">{this.props.content.listLinks[0]}</Nav.Link>
              <Nav.Link className="nav-font-color" href="/about">{this.props.content.listLinks[1]}</Nav.Link>
              <Nav.Link className="nav-font-color" href="/project">{this.props.content.listLinks[2]}</Nav.Link>
              <Nav.Link className="nav-font-color" href="/contact">{this.props.content.listLinks[3]}</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link className="nav-lang-font-color" lang="swe" onClick={(e)=> this.props.setLanguage(e.target.lang)} >Sv</Nav.Link>
              <Nav.Link className="nav-lang-font-color" lang="eng" onClick={(e)=> this.props.setLanguage(e.target.lang)} >Eng</Nav.Link>
            </Nav>
        </Navbar>
        );

    };

}

export default Header;


