import React, { useEffect,useState } from 'react';
import firebase from '../Database/Database'
import { Row,Col,Container } from 'react-bootstrap';
import './OrderDetail.css'
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B  90%)',
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

const stripePromise = loadStripe("pk_test_51Hrg6GBIflWeFM0HdwRpYcyT6KnnJ6cRbWtws6i7VTo9uKzkAHLfalKGzOZG5OqYRGU5hBsfivpTa7L68cDYJ8h400wPFLgf2X");

const OrderDetail = ({match}) => {
    const [data , setdata] = useState('');
    
    useEffect(async() => {
        const db=firebase.collection('Booking').doc(match.params.id).get()
            .then(snapshot => setdata(snapshot.data()))
      },[]);

    return ( 
        <div>
          <h1 className="OdDet">Order Details</h1>
            <Container className="OdName">
             
            <Row   >
                <Col><th className="dStatus" >Dealer Email : </th><th className="OdVal">{data.demail}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th  >Date : </th><th className="OdVal">{data.fdate}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th   >Function Type : </th><th className="OdVal">{data.ftype}</th></Col>
            </Row>
            { data.ftime ? 
            <Row   className="dStatus">
            <Col ><th >Function Time : </th><th className="OdVal" >{data.ftime}</th></Col>
            </Row>
            : 
            <p></p>}
            { data.venue ? 
            <Row   className="dStatus">
            <Col><th  >Venue : </th><th className="OdVal">{data.venue}</th></Col>
            </Row>
            : 
            <p></p>}
            { data.nopeople ? 
            <Row>
            <Col><th   className="dStatus">Number of People : </th><th className="OdVal">{data.nopeople}</th></Col>
            </Row>
            : 
            <p></p>}
            <Row   className="dStatus">
                <Col><th  >Price : </th><th className="OdVal">{data.price}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th  >Status : </th><th className="OdVal">{data.status}</th></Col>
            </Row>
            { data.status !== "Accept" ?
            <p></p>
            :
             data.payment !=="" ?
                <Row className="dStatus">
                <Col><th x>Payment : </th><th className="OdVal">{data.payment}</th></Col>
                </Row>
            :
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    success={match.params.id}
                />
            </Elements>
            }
            </Container>
        </div>
     );
}

const CheckoutForm = ({ success }) => {
  const classes = useStyles();
    const stripe = useStripe();
    const elements = useElements();
    const [dta , setdta] = useState('');
    const history = useHistory();
    
    useEffect(async() => {
        const db=firebase.collection('Booking').doc(success).get()
            .then(snapshot => setdta(snapshot.data()))
      },[]);

    var pric =Math.floor((50*dta.price)/(100));
    var prc=Math.floor(pric*0.63);
    
    const handleSubmit = async event => {
      event.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });
  
      if (!error) {
        const { id } = paymentMethod;
  
        try {
          const { data } = await axios.post('/api/chk', { id, amount: prc , cname:dta.cname , sname:dta.sname});
          console.log(data);
          const db = firebase.collection('Booking');
            const docRef =await db.doc(success).update({
            payment:pric
            });
            history.push("/Order")
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" ,marginLeft:"-10%"}}
      >
        <p className="Paym">Enter details for payment</p>
        <CardElement />
        <button className={classes.root} startIcon={<LoginIcon />} type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  };
 
export default OrderDetail;

