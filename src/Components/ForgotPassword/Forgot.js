
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Forgot.css'
const Forgot =() => (
    
        <Container className="forgot" >
             <Row>
                <Col>
                   <h3>Forgot Password</h3></Col>
            </Row>
            <Row>
            <Col><label>Email</label></Col>
            </Row>
            <Row>
                <Col>
                    <input type="email" placeholder="Enter Email"></input> </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" style={{marginTop:"10px"}}>OK</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>We have sent code to the provided email.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="text" placeholder="Enter Code"></input> </Col>
            </Row>
        </Container>
    
);
export default Forgot;