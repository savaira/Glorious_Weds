import React, { useEffect , useState } from 'react'
import firebase from '../Database/Database'
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servic.css'

const Servic = ({match}) => {
    const[nodata , setnodata]= useState('');
    const [aray , setaray] = useState([]);

    useEffect(async() => {
        setaray(aray =>([]));
          setnodata(`No ${match.params.service} Available`);
        const db = firebase.collection('Services');
        const snapshot = await db
        .where('service', '==',(match.params.service) )
        .where('rating', '>=',0 )
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
                 }
               ]))
             });
             setnodata("");   
        }
      },[match.params.service]);
    
    return (  
        <div>
        <h1 className="serTitle">
            {match.params.service}
        </h1>
        {nodata ? <p>{nodata}</p> 
        :
        <Row >
        {aray.map((aray,i) => 
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
 
export default Servic;