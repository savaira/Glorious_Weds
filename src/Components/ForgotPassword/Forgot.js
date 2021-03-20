import React, { useState } from "react";
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import firebase from '../Database/Database';
import { useLocalStorage } from '../LocalStorage/Local';
import { Container, Row, Col} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Email';

import './Forgot.css'
const useSty = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      marginTop:'10px',
      marginLeft:'-70px',
      padding: '0 30px',
      '&:hover': {
        color: 'black'
    }
    },
  });
  
const Forgot = () => {
    const classes = useSty();
    const history = useHistory();
    const [name, setName] = useLocalStorage('username', 'null');
    const [state , setstate] = useState({
        verification : "",
        email : "",
        err:"",
        chk:"",
        erro:""
        });
    const submit = async () =>{
        if(!state.email){
            setstate({...state, err:"Please enter Email"});    
        }
        else{
            const db = firebase.collection('User');
            const snapshot = await db.where('email', '==', state.email).get();
    if (snapshot.empty) {
      setstate({...state , err:'Invalid email'});
      return;
    }
    else{
        var code =Math.floor(Math.random() * (9999 - 1111) + 1111);
        setstate({...state, verification: code});
        let data={
            ver:code,
            mail:state.email,
            nam:"GloriousWeds"
          }
          axios.post('/api/forma', data);
        }
    }
    }
    const enter = () =>{
        if(state.chk== state.verification){
            setName(state.email);
            console.log(name);
            console.log(state.email);
        history.push("/Header");
        }
        else{
            setstate({...state, erro:"Enter Valid Verification Code"});
        }
    }
    
    return (  
        <Container className="forgot" >
             <Row>
                <Col>
                   <h3 className="for">Forgot Password</h3></Col>
            </Row>
            
            {state.verification =="" ? 
            <div>
            <Row>
            <Col><label>Email</label></Col>
            </Row>
            <Row>
                <Col>
                    <input
                    className="forgo" 
                    type="email" 
                    placeholder="Enter Email"
                    value={state.email}
                    onChange={e => setstate({...state, email: e.target.value })}
                    ></input> </Col>
            </Row>
            <Row><Col style={{color:"red"}}>{state.err}</Col></Row>
            <Row>
                <Col>
                    <Button className={classes.root} startIcon={<ShopIcon />} type="submit" onClick={submit} style={{marginTop:"10px",marginLeft:"15px"}}>OK</Button>
                </Col>
            </Row>
            </div> 
            :
            <div>
            <Row>
                <Col>
                    <p>We have sent code to the provided email.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input 
                    className="forgo"
                    type="text" 
                    placeholder="Enter Code"
                    value={state.chk}
                    onChange={e => setstate({...state, chk: e.target.value })}
                    ></input> </Col>
            </Row>
            <Row><Col>{state.erro}</Col></Row>
            <Row>
                <Col>
                    <Button className={classes.root} startIcon={<ShopIcon />}type="submit" onClick={enter} style={{marginTop:"10px",marginLeft:"15px"}}>Send</Button>
                </Col>
            </Row>
            </div>
            }
        </Container>
    );
}
 
export default Forgot;