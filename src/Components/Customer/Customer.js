import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import ViewProfile from './ViewProfile/ViewProfile';
import {Row, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../LocalStorage/Local';
import './Customer.css'
import { useHistory} from 'react-router-dom';

const Customer = ({match}) => {
    const [name, setName] = useLocalStorage('username', 'null');
    const history = useHistory();

    const logout = () =>{
         setName('null');
         console.log(name);
         history.push('/')
    } 
    return ( 
        <div>
            <Row>
            <Col className="col-2 sidebar">
               <h1 id="hcust">Customer</h1>
               <lu id="sbar">
               <li className="sbar2" ><Link style={{textDecoration:"none",color:"gray"}} to="/Customer/ViewProfile">View Profile</Link></li>
               <li className="sbar2"><Link style={{textDecoration:"none",color:"gray"}} to="/Customer/UpdateProfile">Update Profile</Link></li>
               <li className="sbar2"><Link style={{textDecoration:"none",color:"gray"}} to="/Order">Order</Link></li>
               <li className="sbar2"><Link style={{textDecoration:"none",color:"gray"}} to="/" onClick={logout}>Logout</Link></li>
               </lu>
            </Col>
            <Col>
           { match.params.profile === 'UpdateProfile' ?  <UpdateProfile/> : <ViewProfile/>}
            </Col>
            </Row>
        </div>
     );
}
 
export default Customer;