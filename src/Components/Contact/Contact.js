import React, { Component } from 'react';
import {Col,Row} from 'react-bootstrap'
import ContactTitle from './ContactTitle/ContactTitle'
import ContactForm from './ContactForm/ContactForm'
const Contact = () => {

    return ( 
        <div>
<Row>
    <Col><ContactTitle></ContactTitle></Col>
</Row>
       <Row>
           <Col><ContactForm></ContactForm></Col>
       </Row>
        </div>
     );
}
 
export default Contact;