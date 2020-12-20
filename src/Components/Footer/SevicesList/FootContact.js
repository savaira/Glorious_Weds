import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import email from './email.png'
import cont from './cont.png'
import './FootContact.css'

const FootContact = () => {
    return (  
        <div>
            <h5 style={{color:'white'}}>Contact Details</h5>
            <Row >
                <Col class='md'><img className="contact " src={email}></img></Col>
                <Col > <p className="details">GloriousWeds@gmail.com</p></Col>
            </Row>
            <Row>
                <Col class='md'><img className="contact " src={cont}></img></Col>
                <Col> <p className="details">Tel:03365001037</p></Col>
            </Row>
               

        </div>
    );
}
 
export default FootContact;