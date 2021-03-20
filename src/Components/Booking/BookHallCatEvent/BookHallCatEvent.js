import React, { useState,useEffect } from 'react';
import {Container,Form} from 'react-bootstrap';
import './BookHallCatEvent.css'
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
const BookHallCatEvent = ({match}) => {
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
    ftime:"",
    nopeople:"",
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
      else if(!state.ftime || state.ftime ==="Select Time"){
        setstate({...state, eror:"Select Function Time"})
      }
      else if(!state.ftype || state.ftype ==="Select Function"){
        setstate({...state, eror:"Select Function type"})
      }
      else if(!state.nopeople){
        setstate({...state, eror:"Enter Number of People"})
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
         nopeople: state.nopeople,
         ftime:state.ftime,
         price:state.price,
         payment:""
         })
        setstate({...state, eror:""})
        history.push('/Order');
      }
    }
  
    return (
      <div>
        <h1 className="booktitle">Booking</h1>
      <Container className="book" >
      <Form>
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className="tit">Function Date</Form.Label>
<Form.Control 
type="date"
value={state.fdate}
onChange={e => setstate({...state, fdate: e.target.value })}
/>
</Form.Group>
<Form.Group controlId="exampleForm.ControlSelect1">
<Form.Label className="tit">Function Time</Form.Label>
<Form.Control 
as="select"
value={state.ftime}
onChange={e => setstate({...state, ftime: e.target.value })}
>
<option>Select Time</option>
<option>Lunch</option>
<option>Dinner</option>
</Form.Control>
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
<Form.Label className="tit">Number of People</Form.Label>
<Form.Control 
type="text"
value={state.nopeople}
onChange={e => setstate({...state, nopeople: e.target.value })}
/>
</Form.Group>
<p>{state.eror}</p>
</Form>
      </Container>
      <Button className={classes.root} startIcon={<ShopIcon />}  onClick={book}>Book Now</Button>
  </div>
        
     );
}
 
export default BookHallCatEvent;












// import React, { Component } from 'react'

// export default class Book extends Component {
//     render() {

//         const project = () => {
//             switch(this.projectName) {
      
//               case "one":   return <BookForm/>;
//             //   case "two":   return <ComponentB />;
//             //   case "three": return <ComponentC />;
//             //   case "four":  return <ComponentD />;
      
//               default:      return <h1>No project match</h1>
//             }}
//     const projectName=["car"];
          
//         return (
//             <div>
//                 { project() }
//             </div>
//         )
//     }
// }
