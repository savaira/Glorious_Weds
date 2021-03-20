import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import cont from "./conct.png";
import phn from "./phn.jpg";
import em from "./em.png";
import "./ContactForm.css";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

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
const ContactForm = () => {
    const classes = useStyles();
    const [state , setstate] = useState({
      name : "",
      email : "",
      message:"",
      err:""
      });

    const submit = () =>{
      if(!state.name){
        setstate({...state, err:"Enter Name"})
      }
      else if(!state.email){
        setstate({...state, err:"Enter email"})
      }
      else if(!state.message){
        setstate({...state, err:"Please give yours comments"})
      }
      else{

      let data={
        nam:state.name,
        mail:state.email,
        messag:state.message
      }
      axios.post('/api/form', data);
      setstate({...state, err:"Thanks for you Comments"})     
      }
    }
 

  return (
    <div>
      <Container className="contain">
        <Row className="gap">
          <Col className="col-1 icon" >
            <img className="contForm" src={phn} />
          </Col>
          <Col className="col-4 det" >
            <label>Enter Name</label>
          </Col>
        </Row>
        <Row className="gap">
          <Col>
            <input 
            type="text"
             placeholder=" "
             value={state.name}
             onChange={e => setstate({...state, name: e.target.value })}
            />
          </Col>
        </Row>
        <Row className="gap">
          <Col className="col-1 icon">
            <img className="contForm" src={em} />
          </Col>
          <Col className="col-4 det">
            <label>Enter Email</label>
          </Col>
        </Row>
        <Row className="gap">
          <Col>
            <input 
            type="text" 
            placeholder=" " 
            value={state.email}
          onChange={e => setstate({...state, email: e.target.value })}
            />
          </Col>
        </Row>
        <Row className="gap">
          <Col className="col-1 icon">
            <img className="contForm" src={cont} />
          </Col>
          <Col className="col-4 det">
            <label>Enter Message</label>
          </Col>
        </Row>
        <Row className="gap">
          <Col >
            <textarea
              class="form-control "
              rows="5"
              type="text"
              placeholder=" "
              value={state.message}
          onChange={e => setstate({...state, message: e.target.value })}
            />
          </Col>
        </Row>
        <Row><h6>{state.err}</h6></Row>
        <Row style={{marginTop:'17px'}}>
            <Col><Button className={classes.root}  startIcon={<SendIcon />} type="submit" onClick={submit}> Submit
        </Button></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
