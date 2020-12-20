import React, { Component } from 'react';
import {Container, Form} from 'react-bootstrap'
import './Tracking.css'
const Tracking = () => {
    return ( 
        <div>
            <Container className="tracklist">
            <Form>
            <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Wedding Hall" />
    <Form.Check type="checkbox" label="Decorators" />
    <Form.Check type="checkbox" label="Catering" />
    <Form.Check type="checkbox" label="Car Rentals" />
    <Form.Check type="checkbox" label="Event Managers" />
    <Form.Check type="checkbox" label="Photographer" />
    <Form.Check type="checkbox" label="Saloon" />
  </Form.Group>
            </Form>
            </Container>
           
            </div>
     );
}
 
export default Tracking;