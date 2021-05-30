import React, { useEffect,useState } from 'react';
import firebase from '../Database/Database'
import { useHistory} from 'react-router-dom';
import './ParticularService.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/ShoppingBasket';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Row,Col} from 'react-bootstrap'
import { useLocalStorage } from './../LocalStorage/Local';

const useStyles = makeStyles({
  root: {
      marginLeft:"-54%",
      marginTop:"8%",
      width:"30%",
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
    border: 0,
    borderRadius: "10px",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'black'
  }
  },
});
const ParticularService = ({match}) => {
    const classes = useStyles();
    const history = useHistory();
    const [state , setstate] = useState({
        sname : "",
        description : "",
        price : "",
        image : "",
        email : "",
        service:"",
        rating:0
        });
    const [name, setName] = useLocalStorage('username', 'null'); 
    useEffect(async() => {
        const db = firebase.collection('Services');
        const snapshot = await db.where('sname', '==',(match.params.id) ).get();
        snapshot.forEach(doc => {
            setstate({...state, 
                sname: doc.data().sname ,
                 description:doc.data().description,
                 price:doc.data().price,
                 image:doc.data().images,
                 email:doc.data().email,
                 service:doc.data().service,
                 rating:doc.data().rating
                });    
            });  
         
    },[]);

    const book = () =>{
        if(name == 'null'){
            history.push("/Login")
        }
        else if(state.service === 'Saloon'){
            history.push(`/BookSaloon/${state.sname}`);
        }
        else if(state.service === 'Wedding Hall' || state.service === 'Catering' || state.service === 'Event Manager'){
            history.push(`/BookHallCatEvent/${state.sname}`);
        }
        else{
            history.push(`/BookDecorPhotoCar/${state.sname}`);
        }
    }
    return ( 
        <div>
           
      <Row>
          <Col><img width="400" height="400" className="servPic" src={state.image}/></Col>
          <Col>
          <h1  className="serName">{state.sname}</h1>
          <Col sm={6}>
          <ProgressBar  className="rat" striped variant="info" now={state.rating * 20} label={`${state.rating * 20}%`}/>
          </Col>
          <Col>
          <h5 className="servPrice"> Rs.{state.price}</h5>
          </Col>
          <Col>
          <Button className={classes.root} startIcon={<ShopIcon />} onClick={book}>Book Now</Button>
          </Col>
          </Col>
      </Row>
  <Row>
      <Col><h4 className="Dhead">Description</h4></Col>
      
  </Row>
  <Row>
  <Col sm={9}><p className="servDes">{state.description}</p></Col>
  </Row>
             
             
            
           
            
            
            
        </div>
     );
}
 
export default ParticularService;