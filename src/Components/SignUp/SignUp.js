import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './SignUp.css'
import Signbtn from './Signbtn/Signbtn';
import Signform from './Signform/Signform';
import ParticlesBg from 'particles-bg'
const SignUp = () => {
    return (
        <Container>
      <h1 className="h1sign">Sign Up</h1>
      <Signform/>
<Row>
    <Col className="sign-btn">
<Signbtn/>
</Col>

</Row>
<ParticlesBg type="color" bg={true}  />
    </Container>
      );
}
 
export default SignUp;