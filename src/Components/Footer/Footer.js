import React, { Component } from "react";
import Copyright from "./Copyright/Copyright";
import Services from "./SevicesList/Services";
import Images from "./SocialMediaImages/Images";
import FootContact from "./SevicesList/FootContact";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

const Footer = () => {
  return (
  
 
    <div className="foot">
      <div className="row p-4">
        <div className="col fcon">
          <FootContact />
        </div>
        <div className="col ser">
          <Services />
        </div>
        <div className="col">
          <Images />
        </div>
      </div>
      <Copyright />
    </div>
   
  );
};

export default Footer;
