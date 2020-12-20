import React, { useEffect,useState } from 'react';
import firebase from '../Database/Database'
import { useHistory} from 'react-router-dom';
import './ParticularService.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/ShoppingBasket';

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
const ParticularService = ({match}) => {
    const classes = useStyles();
    const history = useHistory();
    const [state , setstate] = useState({
        sname : "",
        description : "",
        price : "",
        image : "",
        email : "",
        service:""
        });
            
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
                 service:doc.data().service
                });    
            });  
         
    },[]);

    const book = () =>{
        if(state.service === 'Saloon'){
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
             <h1 style={{marginTop:"20px"}} className="serName">{state.sname}</h1>
             <img width="400" height="400" src={state.image}/>
            <p>{state.description}</p>
            <h5> Rs.{state.price}</h5>
            <Button className={classes.root} startIcon={<ShopIcon />} onClick={book}>Book Now</Button>
        </div>
     );
}
 
export default ParticularService;