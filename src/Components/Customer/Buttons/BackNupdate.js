import React, { Component } from 'react';
import {Col,Row,Button} from 'react-bootstrap'
import './BackNupdare.css'
const BackNupdate = () => {
    return ( 
        <div >
             <Row>
                      <Col >
                      <Button className="btn-backnupdate" >Back</Button>
                      </Col>
                      <Col>
                      <Button className="btn-backnupdate">Update</Button>
                      </Col>
                  </Row>
           </div> 
     );
}
 
export default BackNupdate;







