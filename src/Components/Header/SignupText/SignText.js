import React, { useEffect,useState } from 'react';
import './SignText.css'
import firebase from '../../Database/Database'
import {Link} from 'react-router-dom';
import { useLocalStorage } from '../../LocalStorage/Local';
import loginpic from './logi.png';

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
            console.log(name);
            if(name === 'admin@gweds.com'){
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
            <Link to="/SignUp" style={{textDecoration:"none"}} className="text">Sign Up</Link>
            );
        }
    }
    return ( 
        
            check()
        
     );
}
 
export default SignText;