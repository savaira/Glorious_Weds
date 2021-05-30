import React, { useState,useEffect } from 'react';
import './Services.css';
import {Row,Col,Button} from 'react-bootstrap'
import firebase from '../Database/Database'
import { Link } from 'react-router-dom';

const Services = ({match}) => {
    const[nodata , setnodata]= useState(`No ${match.params.search} Available`);
    const [aray , setaray] = useState([]);
    const [ary , setary] = useState([]);
    const [Filtered, setFiltered] = useState([]);
    const[search , setsearch] = useState({
        selectCategory:'Services',
        selectC:''
    });

    useEffect(async() => {
      setaray([]);
      const db = firebase.collection('Services');
      const snapshot = await db
      .orderBy('rating', 'desc')
      .get();
      
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
      fillter();
      setsearch({...search , selectC : ''}) 
    },[match.params.search]);

   const fillter = () =>{
    setFiltered(
      aray.filter((country) =>
        country.serv.toLowerCase().includes(match.params.search.toLowerCase()) ||
        country.sname.toLowerCase().includes(match.params.search.toLowerCase())
      )
    );
    
   }
    const onSubmit = async () =>{
      setary([]);
      const db1 = firebase.collection('Services');
        const snapshots = await db1.where('service', '==',(search.selectCategory) ).get();
        
        if(!snapshots.empty){
            snapshots.forEach(doc => { 
                setary(ary =>([
                    ...ary,
                 {
                   sname: (doc.data().sname),
                   image: (doc.data().images),
                   id:(doc.id),
                 }
               ]))
             });
  }
  setsearch({...search , selectC : `You have searched ${search.selectCategory}`})
}

    return ( 
        <div>
          <div>
              <Row>
                  <Col>
                  <div className="service-sel">
                  <select 
        
           id="dropdown" 
            value={search.selectCategory}
            onChange={e => setsearch({...search, selectCategory: e.target.value })}
            >
           <option value="Select Service">Select Service</option>
                <option value="Car Rental">Car Rentals</option>
                <option value="Catering">Catering</option>
                <option value="Decorator">Decorators</option>
                <option value="Event Manager">Event Managers</option>
                <option value="Photography">Photography</option>
                <option value="Saloon">Saloon</option>
                <option value="Wedding Hall">Wedding Halls</option>
           </select>
              
            </div>
          
                  </Col>
                  <Col className="service-sel btnsear">
                  <Button onClick={onSubmit}>Search</Button>
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
              </Row>
          </div>
          {nodata ? <p>{nodata}</p> 
        :
        search.selectC ?
        <div>
        <Row><div className="sear m-4"><h3>{search.selectC}</h3></div></Row>
        <Row >
        {ary.map((ary,i) => 
          <Col sm={4} ><Link style={{textDecoration:"none"}} to={`/ParticularService/${ary.sname}`}>
            <tr  key={i}><img width="300" height="300" className="servicePic" src={ary.image}/></tr>
            <tr  key={i}><h3 className="serviceName">{ary.sname}  </h3></tr>
            </Link></Col>
            )}
        </Row>
        </div>
        :
        <div>
        <Row><div className="sear m-4"><h3>You have searched {match.params.search}</h3></div></Row> 
        <Row>
        {Filtered.map((aray,i) => 
          <Col sm={4} ><Link style={{textDecoration:"none"}} to={`/ParticularService/${aray.sname}`}>
            <tr  key={i}><img width="300" height="300" className="servicePic" src={aray.image}/></tr>
            <tr  key={i}><h3 className="serviceName">{aray.sname}  </h3></tr>
            </Link></Col>
            )}
        </Row> 
        </div>
        }
        </div>
     );
}
 
export default Services;