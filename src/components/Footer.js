import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import '../resources/css/font.css'
import '../resources/css/footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // companyInfo: "Projektledningsbyrån AB \nOrg.nr: 556886-4622 \nLångholmsgatan 30 \n117 33 Stockholm"
        }
    }
    render() {

        return (
            <Navbar className="dark-background">
                <Navbar.Brand className="brand" href="#home">Projektledningsbyrån</Navbar.Brand>
                <Nav className="mr-auto navbar align-text">
                    <Navbar.Text className="footer align-text">
                        <p className="p3">Projektledningsbyrån AB</p>
                        <p className="p1">Org.nr: 556886-4622</p>
                        <p className="p1">ÖSTGÖTAGATAN 42</p>
                        <p className="p1">116 64 Stockholm</p>
                        <p className="p1"> </p>
                    </Navbar.Text>
                </Nav>
                <Nav className="ml-auto">
                    <Navbar.Text className="footer">
                        <a href="https://www.uc.se/risksigill2?showorg=556886-4622&language=swe"
                            title="Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser.">
                            <img src="https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=sma&fontcolor=b" />
                        </a>
                    </Navbar.Text>
                </Nav>
                <Nav className="m-auto">
                    <Navbar.Text className="footer">
                        <p className="p2">{this.props.content.info[0]}</p>
                        <p className="p1">{this.props.content.info[1]}</p>
                        <p className="p1">+46 70 744 08 50</p>
                        <p className="p1"><a className="footer-links" href="mailto:johan.hedenstrom@projektledningsbyran.se">Mail</a></p>
                        <p className="p1">
                            <a className="footer-links"
                                href="https://www.google.com/maps?ll=59.311522,18.077563&z=13&t=m&hl=en-SE&gl=US&mapclient=embed&q=%C3%96stg%C3%B6tagatan+42+116+64+Stockholm">
                                {this.props.content.info[2]}
                            </a>
                        </p>
                    </Navbar.Text>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer;