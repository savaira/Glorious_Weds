import React, { useEffect, useState } from 'react';
import {Table,Container} from 'react-bootstrap'
import { useLocalStorage } from './../../LocalStorage/Local';
import firebase from '../../Database/Database'
import './ViewService.css'

const ViewServices = () => {
  const [name, setName] = useLocalStorage('username', 'null');
  const [aray , setaray] = useState([]);

  useEffect(async() => {
    const db = firebase.collection('Services');
    const snapshot = await db.where('email', '==', name).get();
    
    snapshot.forEach(doc => {
        setaray(aray =>([...aray, doc.data().sname]));    
        });
  },[]);
    return ( 
        <div>
            <Container className="tabl"> 
                <Table bordered hover >
  <thead>
    <tr>
    
      <th>Service No</th>
      <th>Service Name</th>
    </tr>
  </thead>
  <tbody>
  {aray.map((aray,i) => 
    <tr><td key={i}>{i+1}</td><td key={i}>{aray}</td></tr>)}
  </tbody>
</Table>
</Container>
</div>
     );
}
 
export default ViewServices;