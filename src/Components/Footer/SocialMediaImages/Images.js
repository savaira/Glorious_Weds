import React, { Component } from 'react';
import './Images.css'
import fb from './fb2.png';
import insta from './insta.png';
import twit from './tw2.png';
import youtube from './you2.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';

const Images = () => {
    return ( 
    <div>

    <h5 class="text-uppercase" className="soci">Join Us on Social Media</h5>
    <Container>
      <Row>
        <Col>
        <a class="nav-link" href="#!"><img class="rounded-circle im" src={fb} alt="FB" className="social-app"></img></a>
        </Col>
        <Col>
        <a class="nav-link" href="#!"><img class="rounded-circle im" src={insta} alt="Instagram" className="social-app"></img></a>
        </Col>
        <Col>
        <a class="nav-link" href="#!"><img class="rounded-circle im" src={twit} alt="Twitter" className="social-app"></img></a>
        </Col>
        <Col>
        <a class="nav-link" href="#!"><img class="rounded-circle im" src={youtube} alt="Youtube" className="social-app"></img></a>  
        </Col>
      </Row>
    </Container>
        
    </div> );
}
 
export default Images;