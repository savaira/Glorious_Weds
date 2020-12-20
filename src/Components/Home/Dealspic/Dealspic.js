import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import './Dealspic.css'
import car from './car.jpg'
import cater from './cater.jpg'
import hal from './hall.jpg'
import photo from './photo.jpg'
import event from './event.jpg'
import saloon from './saloon.jpg'
import decor from './decor.jpg'
import {Link} from 'react-router-dom'

const Dealspic = () => {
    return ( 
        <div>
    <Row>
   <Col>
   <Link to="/Servic/Car Rental"><img src={car} className="services" /></Link>
   <br></br>
   <Link className="services-link" to="/Servic/Car Rental">Car Rentals</Link>
   </Col>
   <Col>
   <Link to="/Servic/Catering">
     <img src={cater} className="services"  style={{height: '230px'}} />
     </Link>
   <br></br>
   <Link className="services-link" to="/Servic/Catering">Catering</Link>
   </Col>
   <Col>
   <Link to="/Servic/Decorator">
     <img src={decor} className="services" />
     </Link>
   <br></br>
   <Link className="services-link" to="/Servic/Decorator">Decorators</Link>
   </Col>
 </Row>
 <Row>
 <Col>
 <Link to="/Servic/Event Manager">
   <img src={event} className="services" style={{height: '230px'}} />
   </Link>
   <br></br>
   <Link className="services-link" to="/Servic/Event Manager">Event Managers</Link>
   </Col>
   <Col>
   <Link to="/Servic/Photography">
     <img src={photo} className="services" />
   </Link>
   <br></br>
   <Link className="services-link" to="/Servic/Photography">Photography</Link>
   </Col>
   <Col>
   <Link to="/Servic/Saloon">
     <img src={saloon} className="services" />
   </Link>
   <br></br>
   <Link className="services-link" to="/Servic/Saloon">Saloon</Link>
   </Col>
 </Row>
 <Row>
 <Col>
 <Link to="/Servic/Wedding Hall">
   <img src={hal} className="services" />
   </Link>
   <br></br>
   <Link className="services-link" to="/Servic/Wedding Hall">Wedding Halls</Link>
   </Col>
 </Row>
        </div>
     );
}
 
export default Dealspic;