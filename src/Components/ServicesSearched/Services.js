import React, { useState,useEffect } from 'react';
import './Services.css';
import {Row,Col,Button} from 'react-bootstrap'
import firebase from '../Database/Database'
import { Link } from 'react-router-dom';

const Services = ({match}) => {
    const[nodata , setnodata]= useState('');
    const [aray , setaray] = useState([]);
    const [Filtered, setFiltered] = useState([]);
    const[search , setsearch] = useState({
        selectCategory:'Services',
        selectCity:''
    });

    useEffect(async() => {
      setnodata(`No ${match.params.search} Available`);
      const db = firebase.collection('Services');
      const snapshot = await db.where('service', '!=','').get();
      
      if(!snapshot.empty){
          snapshot.forEach(doc => { 
              setaray(aray =>([
                  ...aray,
               {
                 sname: (doc.data().sname),
                 image: (doc.data().images),
                 id:(doc.id),
                 serv:(doc.data().service)
               }
             ]))
           });
           setnodata("");      
      }
      
    },[match.params.search]);

    useEffect(() => {
      setFiltered(
        aray.filter((country) =>
          country.serv.toLowerCase().includes(match.params.search.toLowerCase()) ||
          country.sname.toLowerCase().includes(match.params.search.toLowerCase())
        )
      );
    },[]);
   
    const onSubmit = async () =>{
      setFiltered(
        aray.filter((country) =>
          country.serv.toLowerCase().includes(match.params.search.toLowerCase()) ||
          country.sname.toLowerCase().includes(match.params.search.toLowerCase())
        )
      );
  }
  

    return ( 
        <div>
          <div>
              <Row>
                  <Col className="col-2">
                  <div className="service-sel">
                  <select 
        className="col-3"
           id="dropdown" 
            value={search.selectCategory}
            onChange={e => setsearch({...search, selectCategory: e.target.value })}
            >
           <option value="Select Service">Select Service</option>
                <option value="Car Rentals">Car Rentals</option>
                <option value="Catering">Catering</option>
                <option value="Decorators">Decorators</option>
                <option value="Event Managers">Event Managers</option>
                <option value="Photography">Photography</option>
                <option value="Saloon">Saloon</option>
                <option value="Wedding Halls">Wedding Halls</option>
           </select>
              
            </div>
          
                  </Col>
                  {/* <Col className="col-1">
                  <div className="service-sel">
                  <select 
                  id="dropdown" 
                  value={search.selectCity}
                  onChange={e => setsearch({...search, selectCity: e.target.value })}
                  >
                  <option value="Select City">Select City</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option> 
              </select>
            </div>
                  </Col> */}
                  <Col className="service-sel col-1 btnsear">
                  <Button onClick={onSubmit}>Search</Button>
                  </Col>
              </Row>
          </div>
          {nodata ? <p>{nodata}</p> 
        :
        <Row>
        <div className="sear m-4">You have searched {match.params.search}</div>
        {Filtered.map((aray,i) => 
          <Col sm={4} ><Link style={{textDecoration:"none"}} to={`/ParticularService/${aray.sname}`}>
            <tr  key={i}><img width="300" height="300" className="servicePic" src={aray.image}/></tr>
            <tr  key={i}><h3 className="serviceName">{aray.sname}  </h3></tr>
            </Link></Col>
            )}
        </Row>
        }
        </div>
     );
}
 
export default Services;