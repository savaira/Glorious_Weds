import React, { Component } from 'react';
import Dealspic from './Dealspic/Dealspic';
import GwedPic from './GwedPic/GwedPic';
import Gweds from './GWeds/Gweds';
import WeDeals from './WeDeals/Wedeals';
import {Row,Col,Container} from 'react-bootstrap'
import './Home.css'
import bg from './1667.jpg'
const Home = () => {
    return ( 
       
        <div>
            <div className="co">
            <Row>
                <img src={bg} className="homeBg"></img>
            </Row>
             <Row>
                <Col className="Gd" > <Gweds ></Gweds> </Col>
            </Row>
            <Row>
                <Col className="homeBg2">
                <GwedPic ></GwedPic>
                </Col>
            </Row>
            
            </div>
            
            <WeDeals></WeDeals>
            <Dealspic></Dealspic>
        
        </div>
     );
}
 
export default Home;
