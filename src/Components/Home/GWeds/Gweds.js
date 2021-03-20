import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Gweds.css";
import {Spring} from 'react-spring/renderprops'
const GWeds = () => {
  return (
    // <Row>
    //   <Col>
    //     <h1 className="home-head">Glorious Weds</h1>
    //   </Col>
    // </Row>
    <Spring from={{opacity:0,marginTop:-500}}
    to={{opacity:1,marginTop:0}}>
    {props => (
        <div style={props}>
          <div  id="homePg">
        Glorious Weds
    </div>
        </div>
    )}
</Spring>
    
  );
};

export default GWeds;
