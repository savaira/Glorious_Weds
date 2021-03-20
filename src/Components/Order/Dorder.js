import React, { useState,useEffect } from 'react';
import './Dorder.css'
import { Link } from 'react-router-dom';
import { Container,Table } from 'react-bootstrap';
import { useLocalStorage } from '../LocalStorage/Local';
import firebase from '../Database/Database'

const Dorder = () => {

    const [name, setName] = useLocalStorage('username', 'null');
    const [state , setstate] = useState([]);
            
    useEffect(async() => {
        const db = firebase.collection('Booking');
        const snapshot = await db.where('demail', '==', name).get();
        
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
                <h1 className="orderTitle">Orders Placed</h1>
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
    <tr className="tb0">
        <td key={i}>{i+1}</td>
        <td key={i}>{state.fdate}</td>
        <td key={i}>{state.sname}</td>
        <Link style={{ textDecoration: 'none' }} to={`/UpdateStatus/${state.id}`}><td className="status" key={i}>{state.status}</td></Link>
    </tr>)}
  </tbody>
</Table>
                </Container>
                
            </div>
     );
}
 
export default Dorder;