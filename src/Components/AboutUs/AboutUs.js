import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../Login/SideBar/Sidebar';
import './AboutUs.css'
const AboutUs = () => {
    return ( 
        <div>
            <Row>
                <Col>
                <h1 className="about">About Us</h1>
                </Col>
            </Row>
            <Row>
                <Col className="col-6 aboutlines">
                <p>
                    Glorious Weds is an online platform that allows you to make your dreams true of a perfect wedding. It helps you by providing the facility to book Wedding Halls, Car Rentals, Decorators, Event Managers, Catering, Saloons and Photography. The platform of decorating the stage decor is provided you under this system.
                    <br></br>
                    The facility to design the invitation cards is provided.We deals in best dealers to provide you quality based services. We recommend you higly rated dealers.
                </p>
                </Col>
                <Col class='md-1'>
                <Sidebar></Sidebar>
                </Col>
            </Row>
            <Row>
                <Col><h3 className="term">Terms and Conditions</h3></Col>
            </Row>
            <Row>
                <lu className="condi">
                    <li className="condihov">30 percent of the amount is to be paid by the customer at the time of confirmation of booking.</li>
                    <li className="condihov">Amount of advanve will not refunded incase of cancelation of the booking.</li>
                    <li className="condihov">Taxes are applicable if any.</li>
                    <li className="condihov">Discount factor is as follows:
                        <ol>
                            <li className="condihov">On availing 3 services discount up to 15 percent</li>
                            <li className="condihov">Upon availing of the service availed of 2nd-time discount up to 10 percent</li>
                            <li className="condihov">On working days the discount up to 15 percent</li>
                            <li className="condihov">No discount on weekends</li>
                        </ol>
	</li>
 
                </lu>
            </Row>
        </div>
     );
}
 
export default AboutUs;