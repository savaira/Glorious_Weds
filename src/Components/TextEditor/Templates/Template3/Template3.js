import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './Template3.css'
import dg4 from './dg4.jpg'
import dg5 from './dg5.jpg'
const Template3 = () => {
    return ( 
        <div>
            <Container className="design3">
                <Row>
                    <Col>
                    <img src={dg4} height="434px"className="dgpic4"/>
                    </Col>
                    <Col>
                    <img src={dg5} height="434px"className="dgpic5"/>
                    </Col>
                </Row>
                
                


            </Container>
        </div>
     );
}
 
export default Template3;