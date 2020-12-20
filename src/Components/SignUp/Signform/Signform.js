import React, { useState } from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import './Signform.css'
import firebase from '../../Database/Database'
import { useHistory} from 'react-router-dom';

const Signform = () => {
  const history = useHistory()
  const [state , setstate] = useState({
    fname : "",
    lname : "",
    phn : "",
    address : "",
    pass : "",
    cpass:"",
    email : "",
    people :"customer",
    erro:""
    });
    const onSubmit = async () => {
       if(!state.fname){
           setstate({...state , erro:'Enter First Name'});
       }
       else if(!state.lname){
        setstate({...state , erro:'Enter Last Name'});
       }
       else if(!state.phn){
        setstate({...state , erro:'Enter Phone Number'});
       }
       else if(!state.email){
        setstate({...state , erro:'Enter Email'});
       }
       else if(!state.address){
        setstate({...state , erro:'Enter address'});
       }
       else if(!state.pass){
        setstate({...state , erro:'Enter Password'});
       }
       else if(!state.cpass){
        setstate({...state , erro:'Enter Confirm password'});
       }
       else if(state.pass !== state.cpass){
        setstate({...state , erro:'Enter Same Password'});
       }
       else{
        databas();
       }
   
    };
    const databas = async () => {
         firebase.collection('User')
         .add({
         fname: state.fname,
         lname:state.lname,
         phn:state.phn,
         address:state.address,
         email:state.email,
         pass:state.pass,
         people: state.people
         })
    history.push("/Login")
    };
    const onChng = e =>{
      if(e.target.checked){
        setstate({...state ,people : 'dealer'})
      }
      else{
        setstate({...state ,people : 'customer'})
      }
    }
    return (  
        <Form  >
        <Row className="sign-field">
          <Col>
            <Form.Control 
            placeholder="First name" 
            value={state.fname}
            onChange={e => setstate({...state ,fname : e.target.value})}
            />
          </Col>
          <Col>
            <Form.Control 
            placeholder="Last name" 
            value={state.lname}
            onChange={e => setstate({...state ,lname : e.target.value})}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
            <Form.Control type="Date" placeholder="Date of Birth" />
          </Col>
          <Col>
            <Form.Control 
            type="tel"
            placeholder="Phone Number" 
            value={state.phn}
            onChange={e => setstate({...state ,phn : e.target.value})}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
            <Form.Control 
            type="Email" 
            placeholder=" Enter Email" 
            value={state.email}
            onChange={e => setstate({...state ,email : e.target.value})}
            />
          </Col>
          <Col>
            <Form.Control 
            type="text" 
            placeholder="Enter Address" 
            value={state.address}
            onChange={e => setstate({...state ,address : e.target.value})}
            />
          </Col>
        </Row>
        <Row className="sign-field">
        <Col>
            <Form.Control 
            type="Password" 
            placeholder="New Password" 
            value={state.pass}
            onChange={e => setstate({...state ,pass : e.target.value})}
            />
          </Col>
          <Col>
            <Form.Control 
            type="Password" 
            placeholder="Confirm Password" 
            value={state.cpass}
            onChange={e => setstate({...state ,cpass : e.target.value})}
            />
          </Col>
        </Row>
        <table className="chkbox">
          <td>
        <th><input 
        type="checkbox" 
        onChange={onChng}
        /></th>
       <th> <h6>Join Us As Dealer</h6></th>
        </td>
        </table>
        <Row>
        <Col>
        <Form.Text className="warning">{state.erro}</Form.Text>
        <label for="cities" className="city">Choose the City:</label>
      <select id="select-city">
        <option value="Islamabad">Islamabad</option>
        <option value="Rawalpindi">Rawalpindi</option>
      </select>
          </Col>
        </Row>
         <Button  
        variant="primary" 
        onClick={onSubmit}>Sign Up</Button> 
      </Form>
    );
}
 
export default Signform;