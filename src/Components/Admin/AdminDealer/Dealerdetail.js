import React, { useState,useEffect} from 'react';
import firebase from '../../Database/Database'
import {Table, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import './Dealerdetail.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DelIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
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
const Dealerdetail = ({match}) => {
    const classes = useStyles();
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

            aray.forEach(doc => {
                const db = firebase.collection('Services').doc(doc.id).delete();
            });
            history.push('/Admin/Admindealer')
        }
    return ( 
        <div>
            <h1 className="dealerdet">Dealer Services</h1>
            {aray.length == 0 ? <h2>No data </h2> :
            <div>
                <Container>
                <Table bordered hover >
            <thead className="tblHead">
               <tr>
               <th>Service No</th>
               <th>Service</th>
               <th>Service Name</th>
               </tr>
            </thead>
            <tbody className="tbl-data">
            {aray.map((aray,i) => 
            <tr>
            <td key={i}>{i+1}</td>
            <td key={i}>{aray.sname}</td>
            <td key={i}>{aray.service}</td>
            </tr>
            )}
            </tbody>
            </Table>
                </Container>
            <Button className={classes.root} startIcon={<DelIcon />} onClick={del}>Delete Dealer</Button>
            </div>
        }
        </div>
     );
}
 
export default Dealerdetail;