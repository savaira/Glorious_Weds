import React, { useState } from "react";
import "./LoginForm.css";
import { Form } from "react-bootstrap";
import {Link} from 'react-router-dom'
import firebase from '../../Database/Database'
import { useHistory} from 'react-router-dom';
import { useLocalStorage } from './../../LocalStorage/Local';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@material-ui/icons/AccountCircle';

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

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state , setstate] = useState({
    pass : "",
    email : "",
    invalidemail:"",
    invalidpass:""
    });
    const [name, setName] = useLocalStorage('username', 'null');

  const onSubmit = async (e) => {
    e.preventDefault();
    // for inserting data in firebase
    // firebase.collection('users')
    //.add({
    //email: this.state.emal,
    //password:this.state.pas})
    // console.log(this.state.emal);
    // console.log(this.state.pas)
    // 
    // firebase.collection('User')
    // .onSnapshot( (snapshot) => (snapshot.docs.map((doc) => console.log(doc.data()))))
    // update
    //const docRef = firebase.collection('users').doc('poqLVcHpEIbRC6gHmWqA');
    //const res = await docRef.update({
    //  email: "Talat"
    //});
    //console.log(res)
    if(!state.email){
      setstate({...state, invalidemail: 'Enter Email' });
    }
    else if (!state.pass){
      setstate({...state, invalidpass: 'Enter Password' , invalidemail:''});
      
    }
    else if(state.email == 'admin@gweds.com' && state.pass =='1234'){
      setName(state.email);
      history.push("/Header");
    }
    else{
    setstate({...state ,invalidpass : '' , invalidemail:''});
    const db = firebase.collection('User');
    const snapshot = await db.where('email', '==', state.email)
    .where('pass', '==', state.pass).get();
    if (snapshot.empty) {
      setstate({...state , invalidpass:'Invalid email or password'});
      return;
    }  

 //   snapshot.forEach(doc => {
 //     console.log(doc.id);
 //});
setName(state.email);
 history.push("/Header");
}

  };
  return ( 
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="log">Email address</Form.Label>
          <Form.Control
           type="email" 
           placeholder="Enter email"
           value={state.email}
          onChange={e => setstate({...state, email: e.target.value })} 
           />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
  <Form.Text className="warning">{state.invalidemail}</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="log">Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value={state.pass}
          onChange={e => setstate({...state, pass: e.target.value })}
         />
         <Form.Text className="warning">{state.invalidpass}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Link to="/Forgot" className="forgot-btn">
            Forgot Password
          </Link>
        </Form.Group>
        <Form.Group>
          <Link to="/SignUp" className="forgot-btn">
            Not Registered!
          </Link>
        </Form.Group>
        <Button className={classes.root} startIcon={<LoginIcon />} type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
   );
}

export default LoginForm;
