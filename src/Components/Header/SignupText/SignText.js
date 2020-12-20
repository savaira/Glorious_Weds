import React, { useState, useEffect } from 'react';
import './SignText.css'
import SignUp from './../../SignUp/SignUp';
import {Link} from 'react-router-dom';
import { useLocalStorage } from '../../LocalStorage/Local';
import loginpic from './login.png';
import firebase from '../../Database/Database';

const SignText = () => {
    const [name, setName] = useLocalStorage('username', 'null');
    const [state , setstate]= useState('');

    useEffect(async() => {
        const db = firebase.collection('User');
        const snapshot = await db.where('email', '==', name).get();
        
        snapshot.forEach(doc => {setstate(doc.data().people);});
      });

    const check = () => {
        if (name != 'null'){
            if(name == 'admin'){
                return (
                    <Link to='/Admin/Admincustomer'>
                    <img src={loginpic} className="images" />
                    </Link>    
            );
            }
            else if(state == 'customer'){
                return (
                    <Link to='/Customer/ViewProfile'>
                    <img src={loginpic} className="images" />
                    </Link>    
            );
            }
            else{
                return (
                    <Link to='/Dealer/ViewProfile'>
                    <img src={loginpic} className="images" />
                    </Link>    
            );
            }
        }
        else{
            return(
            <Link to="/SignUp" className="text">Sign Up</Link>
            );
        }
    }
    return ( 
        
            check()
        
     );
}
 
export default SignText;