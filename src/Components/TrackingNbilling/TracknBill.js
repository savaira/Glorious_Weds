import React, { Component } from 'react';
import Tracking from './Tracking/Tracking';
import {Row,Col} from 'react-bootstrap'
import Bill from './Billing/Billing';
const TracknBill = () => {
    return ( 
        <div>
           <Row>
               <Col>
               <Tracking></Tracking>
               </Col>
               <Col>
               <Bill></Bill>
               </Col>
           </Row>
        </div>
     );
}
 
export default TracknBill;