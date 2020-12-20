import React, { useState,useEffect} from 'react';
import firebase from '../../Database/Database'
import {Table,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import {firebaseApp} from '../../Database/Database'

const Dealerdetail = ({match}) => {
    const history = useHistory();
    const [aray , setaray] = useState([]);

    useEffect(async() => {
        const db = firebase.collection('Services');
        const snapshot = await db.where('email', '==',`${match.params.profile}`).get();
        snapshot.forEach(doc => { 
           setaray(aray =>([
            ...aray,
            {
              sname: (doc.data().sname),
              service: (doc.data().service),
              id:(doc.id)
            }
          ]))
        })},[]);

        const del = async() =>{
            const db = firebase.collection('User');
            const snapshot = await db.where('email', '==',`${match.params.profile}`).get();
            snapshot.forEach(doc =>{
                const db = firebase.collection('User').doc(doc.id).delete();
            });
            const datab = firebase.collection('Services');
            const snapsht = await datab.where('email', '==',`${match.params.profile}`).get();
            snapsht.forEach(doc =>{
                const storageRef = firebaseApp.storage().ref();
                const fileRef = storageRef.child(doc.data().imgname).delete();
            });

            aray.forEach(doc => {
                const db = firebase.collection('Services').doc(doc.id).delete();
            });
            history.push('/Admin/Admindealer')
        }
    return ( 
        <div>
            <h1>Dealer Services</h1>
            {aray.length == 0 ? <h2>No data </h2> :
            <div>
            <Table bordered hover >
            <thead>
               <tr>
               <th>Service No</th>
               <th>Service</th>
               <th>Service Name</th>
               </tr>
            </thead>
            <tbody>
            {aray.map((aray,i) => 
            <tr>
            <td key={i}>{i+1}</td>
            <td key={i}>{aray.sname}</td>
            <td key={i}>{aray.service}</td>
            </tr>
            )}
            </tbody>
            </Table>
            <Button onClick={del}>Delete Dealer</Button>
            </div>
        }
        </div>
     );
}
 
export default Dealerdetail;