import React, { Component } from 'react';
import './Wedeals.css'
import {Col,Row} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
const WeDeals = () => {
    return ( 
        <div>
       
            <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
 <Row>
     <Col className="home2" >
     <h1  >We Deals in</h1>
     </Col>
 </Row> 
</ScrollAnimation>

           
        </div>
     );
}
 
export default WeDeals;