import React, { Component } from "react";
import weddy from "./wed.jpg";
import pic from "./pic2.jpg"
import pic2 from "./pic3.jpg"
import "./GwedPc.css";
import { Row, Col } from "react-bootstrap";
import {Spring} from 'react-spring/renderprops'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset:200,
  duration:1000,

});
const GwedPic = () => {
  return (
    <div data-aos="flip-left">
       <Row>
         <Col style={{ margin: "20px" }}>
         <img  src={pic} className="imges2 rounded-circle"/>
           <img src={weddy} className="imges rounded-circle"/>
           <img src={pic2} className="imges3 rounded-circle"/>
         </Col>
       </Row>
    </div>
  );
};

export default GwedPic;
