import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import { Link,NavLink ,Redirect,useHistory} from 'react-router-dom';
import Login from '../../Login/Login';
import Home from './../../Home/Home';

class Navigatiobar extends Component {
    
     state={
        service: ["Car Rental","Catering","Decorator","Event Manager","Photography","Saloon","Wedding Hall"],
        navb:[
            {name : "Design Cards" , lnk : "#features"},
            {name : "Stage Decor" , lnk : "#features"},
            {name : "About Us" , lnk : "#features"},
            {name : "Contact Us" , lnk : "#features"},
            {name : "Join Us" , lnk : "/Login"}
        ]
     };
     onSubmit = () =>{
    }
     
     render(){
        
    return (  
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Link to="/Home">Home</Link>
                    <NavDropdown title="Dealers" id="collasible-nav-dropdown" variant="Secondary">
                        {this.state.service.map(service =>
                        <NavDropdown.Item key={service} as={Link} to={`/Servic/${service}`}>{service}</NavDropdown.Item>)}
                    </NavDropdown>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {this.state.navb.map(navb =>
                        <NavLink key={navb} to={navb.lnk} className="p-2">{navb.name}</NavLink>)}
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button 
                    type="submit"
                    variant="outline-success"
                    onClick={this.onSubmit}
                    >Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
     }
}
 
export default Navigatiobar;