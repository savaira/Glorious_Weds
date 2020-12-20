import React, { useEffect, useState} from 'react';
import firebase from '../../Database/Database'
import {Table} from 'react-bootstrap'

const Admincustomer = () => {
    const [aray , setaray] = useState([]);

    useEffect(async() => {
    const db = firebase.collection('User');
    const snapshot = await db.where('people', '==', 'customer').get();
    snapshot.forEach(doc => { 
       setaray(aray =>([
        ...aray,
        {
          name: (doc.data().fname),
          email: (doc.data().email),
          address:(doc.data().address),
          phn:(doc.data().phn)
        }
      ]))
    })},[]);

    return (  
        <div>
            <h1>Customer</h1>
            <Table bordered hover >
            <thead>
               <tr>
               <th>Service No</th>
               <th>Name</th>
               <th>Email</th>
               <th>Address</th>
               <th>Phone No</th>
               </tr>
            </thead>
            <tbody>
            {aray.map((aray,i) => 
            <tr><td key={i}>{i+1}</td>
            <td key={i}>{aray.name}</td>
            <td key={i}>{aray.email}</td>
            <td key={i}>{aray.address}</td>
            <td key={i}>{aray.phn}</td>
            </tr>)}
            </tbody>
            </Table>

        </div>
    );
}
 
export default Admincustomer;