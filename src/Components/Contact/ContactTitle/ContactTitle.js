import React, { Component } from 'react';
import {Col,Row} from 'react-bootstrap'
import './ContactTitle.css'
const ContactTitle = () => {
    return ( 
        <div>
            <Row>
                <Col><h1 className="Conta">Contact Us</h1></Col>
            </Row>
            <Row>
                <Col><p className="Contalines">How I can help you?
                    <br></br>
                    Please fill the form for any query.
                    <br></br>
                    Will be responded shortly.
                </p>
               
                </Col>
            </Row>
        </div>
     );
}
 
export default ContactTitle;