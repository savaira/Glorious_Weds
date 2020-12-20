import React, { useState,useEffect } from "react";
import { Container, Form ,Button} from "react-bootstrap";
import "./BookDecorPhotoCar.css";
import firebase from '../../Database/Database'
import { useHistory} from 'react-router-dom';
import { useLocalStorage } from '../../LocalStorage/Local';

const BookCarRental = ({match}) => {

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
    venue:""
    });

    useEffect(async() => {
      const db = firebase.collection('Services');
      const snapshot = await db.where('sname', '==', (match.params.sername)).get();
      
      snapshot.forEach(doc => {
          setstate({...state,
               demail:doc.data().email,
               sname:(match.params.sername)
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
         venue:state.venue
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
            <Form.Label>Function Date</Form.Label>
            <Form.Control 
            type="date" 
            value={state.fdate}
            onChange={e => setstate({...state, fdate: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Function Type</Form.Label>
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
            <Form.Label>Venue</Form.Label>
            <Form.Control 
            type="text" 
            value={state.venue}
            onChange={e => setstate({...state, venue: e.target.value })}
            />
          </Form.Group>
          <p>{state.eror}</p>
        </Form>
      </Container>
      <Button className="btn-book" onClick={book}>Book Now</Button>
    </div>
  );
};

export default BookCarRental;
