import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../resources/css/font.css";
import "../../resources/css/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // companyInfo: "Projektledningsbyrån AB \nOrg.nr: 556886-4622 \nLångholmsgatan 30 \n117 33 Stockholm"
    };
  }
  render() {
    return (
      // <Navbar className="dark-background">
      //     <Nav className="mr-auto">
      //         <Navbar.Text className="footer align-text">

      <div className="dark-background content footer">
        <Container>
          <Row>
            <Col>
              <p className="p2 content">Projektledningsbyrån AB</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="p1">ÖSTGÖTAGATAN 42</p>
              <p className="p1">116 64 STOCKHOLM</p>
              <p className="p1">{this.props.content.info[1]}</p>
              <p className="p1">+46 70 744 08 50</p>
              <p className="p5 padding-top">
                <a
                  className="footer-links"
                  href="mailto:johan.hedenstrom@projektledningsbyran.se"
                >
                  Mail
                </a>
              </p>
              <p className="p5 padding-bottom">
                <a
                  className="footer-links"
                  href="https://www.google.com/maps/place/L%C3%A5ngholmsgatan+30,+117+33+Stockholm/@59.316316,18.0308374,17z/data=!3m1!4b1!4m5!3m4!1s0x465f77c5ab9f6c5d:0x731140427f29efce!8m2!3d59.3163133!4d18.0330262"
                >
                  {this.props.content.info[2]}
                </a>
              </p>
            </Col>
            <Col>
              <p className="p1 content">Org.nr: 556886-4622</p>
              <a
                href="https://www.uc.se/risksigill2?showorg=556886-4622&language=swe"
                title="Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser."
              >
                <img src="https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=sma&fontcolor=b" alt="uc sigill" />
              </a>
            </Col>
          </Row>
          <Row></Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>

      //         </Navbar.Text>
      //     </Nav>
      // </Navbar>
    );
  }
}

export default Footer;
