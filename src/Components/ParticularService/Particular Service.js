import React, { useEffect,useState } from 'react';
import firebase from '../Database/Database'
import {Button} from 'react-bootstrap';
import { useHistory} from 'react-router-dom';

const ParticularService = ({match}) => {
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
             <h1 style={{marginTop:"20px"}}>{state.sname}</h1>
             <img width="400" height="400" src={state.image}/>
            <p>{state.description}</p>
            <h5>{state.price}</h5>
            <Button onClick={book}>Book Now</Button>
        </div>
     );
}
 
export default ParticularService;