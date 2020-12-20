import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Row,Col,Button,FormControl,Container} from 'react-bootstrap'
import { useHistory} from 'react-router-dom';
import './Admin.css'
import Admincustomer from './AdminCustomer/Admincustomer';
import Admindealer from './AdminDealer/Admindealer';

const Admin = ({match}) => {

  const history = useHistory();
 const [state , setstate] = useState('Admincustomer');

 const onChange = (e) =>{
  setstate(e.target.value)
  history.push(`/Admin/${e.target.value}`);
 }

 return (
    <div className="bar">
      <h1 className="admin p-3">Admin</h1>
      <Container>
      <Row>
        <Col className='col-3 drop'><p>Select User type</p></Col>
        <Col>
        <select 
        className="col-3"
           id="dropdown" 
            value={state}
            onChange={onChange}
            >
           <option value="Admincustomer">Customer</option>
           <option value="Admindealer">Dealer</option>
           </select>
        </Col>
      </Row>
      <Row>
      { match.params.profile === 'Admincustomer' ?  <Admincustomer/> : <Admindealer/>}
      </Row>
      </Container>
    </div>
  );
};

export default Admin;
