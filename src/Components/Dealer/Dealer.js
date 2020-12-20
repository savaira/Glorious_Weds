import React, { Component } from 'react';
import ViewProfile from './ViewProfile/ViewProfile'
import AddingService from './AddingService/AddingService';
import {Row,Col} from 'react-bootstrap'
import ViewServices from './ViewServices/ViewService';
import './Dealer.css'
import { useLocalStorage } from './../LocalStorage/Local';
import { Link } from 'react-router-dom';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import UpdateService from './UpdateService/UpdateService';
import { useHistory} from 'react-router-dom';

const Dealer = ({match}) => {

    const [name, setName] = useLocalStorage('username', 'null');
    const history = useHistory();
    const logout = (e) =>{
        e.preventDefault();
        setName('null')
        console.log(name);
   }
   
    return ( 
        <div>
            <Row>
            <Col className="col-2 sbar">
               <h1 id="t">Dealer</h1>
               <lu className="side">
               <li><Link to="/Dealer/ViewProfile">View Profile</Link></li>
               <li><Link to="/Dealer/UpdateProfile">Update Profile</Link></li>
               <li><Link to="/Dealer/AddingService">Add Service</Link></li>
               <li><Link to="/Dealer/ViewServices">View Service</Link></li>
               <li><Link to="/Dealer/UpdateService">Update Service</Link></li>
               <li><Link to="/Dorder">Order</Link></li>
               <li><Link to="/" onClick={logout}>Logout</Link></li>
               </lu>
            </Col>
            <Col>
            { match.params.profile === 'ViewProfile' ?  <ViewProfile/> : 
              match.params.profile === 'UpdateProfile' ?  <UpdateProfile/> : 
              match.params.profile === 'AddingService' ?  <AddingService/> : 
              match.params.profile === 'ViewServices' ?  <ViewServices/> :
              <UpdateService/>
            }
            </Col>
            </Row>
           
        </div>
     );
}
 
export default Dealer;