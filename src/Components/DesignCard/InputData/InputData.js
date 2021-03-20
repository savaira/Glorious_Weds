import React, { useState } from 'react';
import {Form,Row,Col, Container} from 'react-bootstrap';
import './InputData.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'black'
  }
  },
});
const InputData = () => {
  const classes = useStyles();  
    return ( 
     <div>
         <h3>Please enter the following fields</h3>
 <Container>
<Form className="sign-field" >
        <Row >
          <Col >
            <Form.Control 
            placeholder="Bride name" 
            />
          </Col>
          <Col>
            <Form.Control 
            placeholder="Groom name" 
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
          <Form.Control 
            placeholder="Bride's Father name" 
           
            />
          </Col>
          <Col>
            <Form.Control 
         
            placeholder="Groom's Father name" 
         
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
          <Form.Control 
          
            placeholder="Venue" 
      
            />
          </Col>
          <Col>
          <Form.Control 
    
            placeholder="Function Type" 
            
            />
          </Col>
        </Row>
        <Row className="sign-field">
        <Col>
        <Form.Control 
        className="sign-up"
           
            placeholder="Date and time" 
           
            />
          </Col>
         
        </Row>
        <Row>
        <Button  
     className={classes.root} style={{marginTop:"10px",marginLeft:"500px"}} >Submit</Button> 
        </Row>
        
      </Form>
        </Container> 
     </div>
       
        
    );
}
 
export default InputData;