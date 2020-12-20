import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import './ViewProfile.css'
import { Link } from 'react-router-dom';
import { useLocalStorage } from './../../LocalStorage/Local';
import firebase from '../../Database/Database'

const ViewProfile = () => {
    const [name, setName] = useLocalStorage('username', 'null');
    const [state , setstate] = useState({
        fname : "",
        lname : "",
        phn : "",
        address : "",
        pass : "",
        email : name
        });
            
    useEffect(async() => {
        const db = firebase.collection('User');
        const snapshot = await db.where('email', '==', name).get();
        
        snapshot.forEach(doc => {
            setstate({...state, fname: doc.data().fname ,
                 lname:doc.data().lname,
                 phn:doc.data().phn,
                 address:doc.data().address,
                 pass:doc.data().pass
                });    
            });
      });

    return (
        <div>
        <Container className="View">
            <Row >
                <Col>
                    <h6>First Name</h6>
                </Col>
                <Col>
                    <p>{state.fname}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Last Name</h6>
                </Col>
                <Col>
                    <p>{state.lname}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Email</h6>
                </Col>
                <Col>
                    <p>{state.email}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>City</h6>
                </Col>
                <Col>
                    <p>name....</p>
                </Col>
            </Row>
            </Container>
            <Container>
            <Table  >
            <Link to="/Dealer/UpdateProfile">
                        <thead>
                            <tr>

                                <th>Address</th>
                                <th>Contact Number</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.address}</td>
                                <td>{state.phn}</td>
                                <td>{state.pass}</td>
                            </tr>
                        </tbody>
                        </Link>
                    </Table>
            </Container>
           
            </div>
      );
}
 
export default ViewProfile;