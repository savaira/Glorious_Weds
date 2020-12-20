import React, { useEffect , useState } from 'react'
import firebase from '../Database/Database'
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Servic = ({match}) => {
    const[nodata , setnodata]= useState('');
    const [aray , setaray] = useState([]);

    useEffect(async() => {
        setaray(aray =>([]));
          setnodata(`No ${match.params.service} Available`);
        const db = firebase.collection('Services');
        const snapshot = await db.where('service', '==',(match.params.service) ).get();
        
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
        <h1>
            {match.params.service}
        </h1>
        {nodata ? <p>{nodata}</p> 
        :
        <Container>
        {aray.map((aray,i) => 
            <Link to={`/ParticularService/${aray.sname}`}>
            <tr key={i}><img width="300" height="300" src={aray.image}/></tr>
            <tr key={i}><h2>{aray.sname}</h2></tr>
            </Link>
            )}
        </Container>
        }
        </div>
    );
}
 
export default Servic;