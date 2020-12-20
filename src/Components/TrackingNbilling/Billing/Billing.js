import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Pic from './Pic/Pic';
import Title from './Title/Title';
import Names from './ServicesName/ServicesNames';
import {Row,Col} from 'react-bootstrap'
import './Billing.css'
const Bill = () => {
    return ( 
        <div>
            <Container className="bill">
                <Row>
                <Col>
                <table>
                    <tr>
                        <td> <Pic></Pic> </td>
                        <td><Title></Title></td>
                    </tr>
                </table>
                   
                    </Col>
                </Row>
                <Row>
                    <Names item1={"Wedding Hall   Rs.90000"} item2={"Saloon   Rs.35000"} item3={"Discount   Rs.0"}item4={"-----------------------------"}item5={"Total   Rs.125000"}>  
                    </Names>
                </Row>
            </Container>
        </div>
     );
}
 
export default Bill;