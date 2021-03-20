import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './Template2.css'
import dg2 from './dg2.jpg'

const Template2 = () => {
    return ( 
        <div>
            <Container className="design2">
                <Row>
                    <Col>
                    <img src={dg2} height="434px"className="dgpic3"/>
                    </Col>
                </Row>
            
                


            </Container>
        </div>
     );
}
 
export default Template2;