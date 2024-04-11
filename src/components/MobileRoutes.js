import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Home.js";

import MobileAbout from "./mobileComponents/MobileAbout";
import MobileProject from "./mobileComponents/MobileProject";
import MobileContact from "./mobileComponents/MobileContact";

class MobileRoutes extends Component {
  checkLanguage = () => {
    if (this.pr.language === "swe") {
      return true;
    } else if (this.pr.language === "eng") {
      return false;
    }
    return true;
  };
  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fadeProperties={this.props.fadeProperties}
              fadeImages={this.props.mobileImages}
            />
          }
        />
        <Route
          path="/about"
          element={
            <MobileAbout
              content={
                this.checkLanguage()
                  ? this.props.swe.aboutText
                  : this.props.eng.aboutText
              }
              sigil={
                this.checkLanguage()
                  ? this.props.swe.sigil
                  : this.props.eng.sigil
              }
            />
          }
        />
        <Route
          path="/contact"
          element={
            <MobileContact
              content={
                this.checkLanguage()
                  ? this.props.swe.contactText
                  : this.props.eng.contactText
              }
            />
          }
        />
        <Route
          path="/project"
          element={
            <MobileProject
              content={
                this.checkLanguage()
                  ? this.props.swe.projectText
                  : this.props.eng.projectText
              }
            />
          }
        />
      </Routes>
    );
  }
}

export default MobileRoutes;
