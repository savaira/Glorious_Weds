import React, { useState,useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import "./BookDecorPhotoCar.css";
import firebase from '../../Database/Database'
import { useHistory} from 'react-router-dom';
import { useLocalStorage } from '../../LocalStorage/Local';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/ShoppingBasket';

const useSty = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    marginTop:'10px',
    marginLeft:'-100px',
    padding: '0 30px',
    '&:hover': {
      color: 'black'
  }
  },
});

const BookCarRental = ({match}) => {
  const classes = useSty();
  const [name, setName] = useLocalStorage('username', 'null');
  const history = useHistory();
  const [state , setstate] = useState({
    cemail:name,
    demail:"",
    fdate:"",
    ftype:"",
    eror:"",
    status:"Pending",
    sname:"",
    venue:"",
    price:""
    });

    useEffect(async() => {
      const db = firebase.collection('Services');
      const snapshot = await db.where('sname', '==', (match.params.sername)).get();
      
      snapshot.forEach(doc => {
          setstate({...state,
            demail:doc.data().email,
            sname:(match.params.sername),
            price:doc.data().price
              });    
          });
    },[]);

    const book = () =>{
      if(state.fdate ===""){
        setstate({...state, eror:"Select Date"})
      }
      else if(!state.ftype || state.ftype ==="Select Function"){
        setstate({...state, eror:"Select Function type"})
      }
      else if(!state.venue){
        setstate({...state, eror:"Enter Venue"})
      }
      else{
        firebase.collection('Booking')
         .add({
         fdate: state.fdate,
         ftype:state.ftype,
         sname:state.sname,
         cemail:state.cemail,
         demail:state.demail,
         status:state.status,
         venue:state.venue,
         price:state.price,
         payment:"",
         rating:0
         })
        setstate({...state, eror:""})
        history.push('/Order');
      }
    }

  return (
    <div>
      <h1 className="booktitle">Booking</h1>
      <Container className="book">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="tit">Function Date</Form.Label>
            <Form.Control 
            type="date" 
            value={state.fdate}
            onChange={e => setstate({...state, fdate: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label className="tit">Function Type</Form.Label>
            <Form.Control 
            as="select"
            value={state.ftype}
            onChange={e => setstate({...state, ftype: e.target.value })}
            >
              <option>Select Function</option>
              <option>Engagement</option>
              <option>Nikah</option>
              <option>Mehndi</option>
              <option>Barat</option>
              <option>Walima</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="tit">Venue</Form.Label>
            <Form.Control 
            type="text" 
            value={state.venue}
            onChange={e => setstate({...state, venue: e.target.value })}
            />
          </Form.Group>
          <p>{state.eror}</p>
        </Form>
      </Container>
      <Button className={classes.root} startIcon={<ShopIcon />} onClick={book}>Book Now</Button>
    </div>
  );
};

export default BookCarRental;
