import React, { Component } from 'react';
import {Row,Col,Table} from 'react-bootstrap'
import email from './email.png'
import cont from './cont.png'
import './FootContact.css'

const FootContact = () => {
    return (  
        <div>
            <h5 style={{color:'#9668b0'}}>Contact Details</h5>
            {/* <Row >
                <Col class='md'><img className="contact " src={email}></img></Col>
                <Col > <p className="details">GloriousWeds@gmail.com</p></Col>
            </Row>
            <Row>
                <Col class='md'><img className="contact " src={cont}></img></Col>
                <Col> <p className="details">Tel:03365001037</p></Col>
            </Row> 
             <Table class="table table-borderless">
  <tbody>
    <tr>
      <td><img className="contact " src={email}></img></td>
      <td><p className="details">GloriousWeds@gmail.com</p></td>
      
    </tr>
    <tr>
      <td><img className="contact " src={cont}></img></td>
      <td><p className="details">Tel:03365001037</p></td>
     
    </tr>
  </tbody>
</Table>   */}

  <div class="row">
    <div class="col-xs-3" >
    <img className="contact " src={email}></img>
    </div>
    <div class="col-xs-9" >
    <p className="details">GloriousWeds@gmail.com</p>
    </div>
  </div>
  
  <div class="row">
    <div class="col-xs-3" >
    <img className="contact " src={cont}></img>
    </div>
    <div class="col-xs-9" >
    <p className="details">Tel:03365001037</p>
    </div>
  </div>
</div>
       
    );
}
 
export default FootContact;