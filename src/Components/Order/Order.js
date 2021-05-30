import React, { useState,useEffect } from 'react';
import './Order.css'
import { Container,Table,Button } from 'react-bootstrap';
import { useLocalStorage } from '../LocalStorage/Local';
import firebase from '../Database/Database'
import { Link } from 'react-router-dom';

const Order = () => {

    const [name, setName] = useLocalStorage('username', 'null');
    const [state , setstate] = useState([]);
       
         
    useEffect(async() => {
        const db = firebase.collection('Booking');
        const snapshot = await db.where('cemail', '==', name).get();
        
        snapshot.forEach(doc => {
            setstate(state =>([...state,
                {
                sname:doc.data().sname,
                status:doc.data().status,
                fdate:doc.data().fdate,
                id:doc.id
            }
            ]));  
            });
      },[]);

    return ( 
        <div>
                <h1 className="ordername">Orders Placed</h1>
                <Container > 
                <Table bordered >
                <thead>
    <tr className="tb">
      <th>Sr No</th>
      <th>Date</th>
      <th>Service Name</th>
      <th>Status</th>
    
    </tr>
  </thead>
  <tbody>
  {state.map((state,i) => 
    <tr className="tb">
        <td key={i}>{i+1}</td>
        <td key={i}>{state.fdate}</td>
        <Link style={{textDecoration:"none",padding:"10px"}}to={`/OrderDetail/${state.id}`}><td style={{border:"none"}} key={i} className="statusOrder">{state.sname}</td></Link>
        <td key={i}>{state.status}</td>
    </tr>)}
  </tbody>
</Table>
                </Container>
                
            </div>
     );
}
 
export default Order;