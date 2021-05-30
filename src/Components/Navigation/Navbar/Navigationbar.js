import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { Link,NavLink ,Redirect,useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Navigationbar.css'
class Navigatiobar extends Component {
    
     state={
        service: ["Car Rental","Catering","Decorator","Event Manager","Photography","Saloon","Wedding Hall"],
        navb:[
            {name : "Design Cards" , lnk : "#features"},
            {name : "Stage Decor" , lnk : "#features"},
            {name : "About Us" , lnk : "/AboutUs"},
            {name : "Contact Us" , lnk : "/Contact"},
            {name : "Chat" , lnk : "/Login"},
            {name : "Chat" , lnk : "/Chat"}
        ]
     };
     onSubmit = () =>{
    }
     
     render(){
        
    return (  
        <div>
            <Navbar collapseOnSelect expand="lg" className="bar" variant="dark" >
               <Link className="navi"to="/Home">Home</Link>
                    <NavDropdown  className="navi navi--dealer" title="Dealers" id="collasible-nav-dropdown">
                        {this.state.service.map(service =>
                        <NavDropdown.Item className="navi2" key={service} as={Link} to={`/Servic/${service}`}>{service}</NavDropdown.Item>)}
                    </NavDropdown>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        {this.state.navb.map(navb =>
                        <NavLink className="navi" key={navb} to={navb.lnk} >{navb.name}</NavLink>)}
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
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