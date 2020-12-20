import React, { useState,useEffect } from 'react';
import './UpdateProfile.css'
import firebase from '../../Database/Database';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocalStorage } from './../../LocalStorage/Local';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update';

const useStyle = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #C71585 30%, #FF8E53 90%)',
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

const UpdateProfile = () => {
    const classes = useStyle();
    const [name, setName] = useLocalStorage('username', 'null');
    const [state , setstate] = useState({
        phn : "",
        address : "",
        pass : "",
        erro : "",
        npass:"",
        cnpass:"",
        id:""
        });
        
        const history = useHistory();
        useEffect(async() => {
            const db = firebase.collection('User');
            const snapshot = await db.where('email', '==', name).get();
            
            snapshot.forEach(doc => {
                setstate(state =>
                    ({...state, 
                     phn:doc.data().phn,
                     address:doc.data().address,
                     pass:doc.data().pass,
                     id:doc.id
                    }));    
                });
          },[]);

        const update = () =>{
            if(!state.address){
                setstate({...state , erro:'Enter Address'});
               }
            else if(!state.phn){
                setstate({...state , erro:'Enter Phone Number'});
            }
            else if(state.npass){
                if(!state.cnpass){
                    setstate({...state , erro:'Enter Confirm Password'});
                   }
                else if(state.npass !== state.cnpass){
                setstate({...state , erro:'Enter Same Password'});
                }
                else{
                    setstate({...state , pass: state.npass , erro:''});
                    databas();
                      }
            }
            else{
             databas();
          setstate({...state , erro:''});
            }
        }
        const databas = async () => {
        //    console.log(state.id);
            const db = firebase.collection('User');
            const docRef =await db.doc(state.id).update({
            address: state.address,
            phn : state.phn,
            pass : state.npass
            });
       
            history.push("/Dealer/ViewProfile")
       };

    return ( 
        <div>
                <Container className="Update">
                    <Row>
                        <Col>
                            <label>Enter Address</label>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <input 
                            value={state.address}
                            onChange={e => setstate({...state ,address : e.target.value})}
                            placeholder={state.address}
                            />
</Col>

                  </Row>
                 
                    <Row>
                        <Col>
                            <label>Enter Phone Number</label>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <input 
                            value={state.phn}
                            onChange={e => setstate({...state ,phn : e.target.value})}
                            type="text"
                             placeholder={state.phn}
                             />
</Col>

                  </Row>
                    <Row>
                        <Col>
                            <label>Enter Old Password</label>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                            <label>{state.pass}</label>
                            </Col>
                        </Row>
                    <Row>
                        <Col>
                            <label>Enter New Password</label>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <input 
                            value={state.npass}
                            onChange={e => setstate({...state ,npass : e.target.value})}
                            type="Password" 
                            placeholder=""
                            />
</Col>

                  </Row>
                 
                    <Row>
                        <Col>
                            <label>Confirm Password</label>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <input 
                            value={state.cnpass}
                            onChange={e => setstate({...state ,cnpass : e.target.value})}
                            type="Password" 
                            placeholder=""
                            />
</Col>

                  </Row>
                  <p className="tex">{state.erro}</p>
                  </Container>
                  <Button className={classes.root} startIcon={<UpdateIcon />} onClick={update}>Update</Button>
                  </div>
     );
}
 
export default UpdateProfile;