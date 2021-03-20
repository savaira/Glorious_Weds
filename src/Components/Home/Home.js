import React, { Component } from 'react';
import Dealspic from './Dealspic/Dealspic';
import GwedPic from './GwedPic/GwedPic';
import Gweds from './GWeds/Gweds';
import WeDeals from './WeDeals/Wedeals';
import {Row,Col} from 'react-bootstrap'
import './Home.css'
import Navigation from './../Navigation/Navigation';

const Home = () => {
    return ( 
       
        <div>
             <Row>
                <Col className="Gd" > <Gweds ></Gweds> </Col>
            </Row>
            <GwedPic></GwedPic>
            <WeDeals></WeDeals>
            <Dealspic></Dealspic>
        </div>
     );
}
 
export default Home;
