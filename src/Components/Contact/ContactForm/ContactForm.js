import React, { Component } from "react";
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
    background: 'linear-gradient(45deg, #C71585 30%, #FF8E53 90%)',
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
            <input type="text" placeholder=" " />
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
            <input type="text" placeholder=" " />
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
            />
          </Col>
        </Row>
        <Row style={{marginTop:'17px'}}>
            <Col><Button className={classes.root}  startIcon={<SendIcon />} type="submit" > Submit
        </Button></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
