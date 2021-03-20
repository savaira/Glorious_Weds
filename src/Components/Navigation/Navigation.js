import React, { useState } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { Link,NavLink ,useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Navigation.css'

const Navigation = () => {
    
    const [state , setstate] = useState();
    const service = ["Car Rental","Catering","Decorator","Event Manager","Photography","Saloon","Wedding Hall"];
    const location = useHistory();
    const navb=[
            {name : "Design Cards" , lnk : "/ViewTemplates"},
            {name : "Stage Decor" , lnk : "#features"},
            {name : "About Us" , lnk : "/AboutUs"},
            {name : "Contact Us" , lnk : "/Contact"},
            {name : "Join Us" , lnk : "/Login"}
        ];

    const onSubmitSearch = () =>{
        
        if (state){
            console.log(state);
            location.push(`/Services/${state}`);
        }
        }
        
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className="bar" variant="dark" >
           <Link className="navi"to="/Home">Home</Link>
                <NavDropdown  className="navi navi--dealer" title="Dealers" id="collasible-nav-dropdown">
                    {service.map(service =>
                    <NavDropdown.Item className="navi2" key={service} as={Link} to={`/Servic/${service}`}>{service}</NavDropdown.Item>)}
                </NavDropdown>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                    {navb.map(navb =>
                    <NavLink className="navi" key={navb} to={navb.lnk} >{navb.name}</NavLink>)}
                </Nav>
            <Form inline>
                <FormControl 
                type="text" 
                placeholder="Search" 
                value={state}
                onChange={e => setstate(e.target.value)}
                className="mr-sm-2" 
                />
                <Button 
                type="submit"
                variant="contained"
                color="primary"
                onClick={onSubmitSearch}
                >Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
 </div>
     );
}
 
export default Navigation;