import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Row,Col,FormControl,Container} from 'react-bootstrap'
import { useHistory} from 'react-router-dom';
import './Admin.css'
import Admincustomer from './AdminCustomer/Admincustomer';
import Admindealer from './AdminDealer/Admindealer';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@material-ui/icons/ExitToApp';
import { useLocalStorage } from '../LocalStorage/Local';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B  90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'black'
  }
  },
});

const Admin = ({match}) => {
  const classes = useStyles();
  const history = useHistory();
 const [state , setstate] = useState('Admincustomer');
 const [name, setName] = useLocalStorage('username', 'null');
    
    const logout = () =>{
         setName('null');
         console.log(name);
         history.push('/')
    }

 const onChange = (e) =>{
  setstate(e.target.value)
  history.push(`/Admin/${e.target.value}`);
 }

 return (
    <div>
      <h1 className="admin p-3">Admin</h1>
      <Container classsName="adminScreen">
      <Row className="adminSelector">
        <Col className='col-3 drop'><p>Select User type</p></Col>
        <Col >
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
        <Col>{ match.params.profile === 'Admincustomer' ?  <Admincustomer/> : <Admindealer/>}</Col>
      
      </Row>
      <Row>
        <Col>
        <Button className={classes.root} startIcon={<LoginIcon />} type="submit" onClick={logout}>
          Logout
        </Button>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Admin;
