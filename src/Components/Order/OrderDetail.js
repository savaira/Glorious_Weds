import React, { useEffect,useState } from 'react';
import firebase from '../Database/Database'
import { Row,Col,Container} from 'react-bootstrap';
import './OrderDetail.css'
import ReactStars from "react-rating-stars-component";
import { loadStripe } from "@stripe/stripe-js";
import { useLocalStorage } from '../LocalStorage/Local';
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
import Mon from '@material-ui/icons/Money';
import Pay from '@material-ui/icons/Payment';
import Can from '@material-ui/icons/Cancel';

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
    const [dvalue,setdvalue]=useState(0);
    const history = useHistory();
    const classes = useStyles();
    const [name, setName] = useLocalStorage('username', 'null');
    const [thank , setthank]= useState('');
     
    useEffect(async() => {
        const db=firebase.collection('Booking').doc(match.params.id).get()
            .then(snapshot => setdata(snapshot.data()))
      },[])

      const Rating = async(newRating) => {
       
        const db = firebase.collection('Booking');
            const docRef =await db.doc(match.params.id).update({
            rating:newRating
            });
            setthank('Thanks For Rating Us');
             avgrating(newRating); 
      };
    
      const cancelOrder = async() =>{
        const db = firebase.collection('Booking').doc(match.params.id).delete();
        history.push('/Order/Order')
    }

    const avgrating = async(newRating) =>{
      var avg=0;
      var rateing=0;
      var Id='';

      const db1 = firebase.collection('Services');
      const snapshots = await db1.where('sname', '==', data.sname).get();
      snapshots.forEach(doc => {
        rateing=doc.data().rating
        Id=doc.id
        });
if(rateing == 0){
avg=newRating
}
else{
avg= ((rateing + newRating)/2)
}
const snap = await db1.doc(Id).update({
rating:avg
});
history.push('/Order')
    }

const discount=async()=>{
  if(dvalue==0){
    var d=0;
    const db2 = firebase.collection('Booking');
    const snapshot = await db2.where('cemail', '==',name).get();
    snapshot.forEach(doc => {
      d++;
    });
    if(d==1){
  setdvalue(data.price-(0.15*data.price));
  setdata({...data, price:data.price-(0.15*data.price)});
    }
    else{
      setdvalue("Not Eligible for Discount")
    }
    
  } 
 
}
      

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
                <Col><th  >Price : </th><th className="OdVal">Rs. {data.price}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th  >Status : </th><th className="OdVal">{data.status}</th></Col>
            </Row>
            <Row className="discount">
            {data.status=="Accept" || data.status=="Pending" ?
            <Col><Button className={classes.root} startIcon={<Mon />} onClick={discount} >Discounted Price : </Button>
            <h5  className="DValue"> {dvalue}</h5>
            </Col>
            : ''}
            </Row>
            <Row className="Corder">
              {data.status=="Accept" || data.status=="Pending" ?
            <Button className={classes.root} startIcon={<Can />} onClick={cancelOrder}>Cancel</Button>
            : '' }
            </Row>
            { data.status !== "Accept" && data.status !== "Completed" ?
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
            {data.status ==='Completed'  && data.rating == 0?  
            <div>
            <Row><h1 style={{fontSize:"25px",marginTop:"1%",marginLeft:"1%",color:"#9668b0"}}>Rate Us</h1></Row>
            <Row>
            <ReactStars
             count={5}
            onChange={Rating}
            size={50}
            isHalf={true}
            value={2.5}
            activeColor="#ffd700"
            />
            </Row>
            </div>
            :
            <p ></p>
            }
            {thank}
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

    var pric =Math.floor((30*dta.price)/(100));
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
        <Button className={classes.root} startIcon={<Pay />} type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
    );
  };
 
export default OrderDetail;

