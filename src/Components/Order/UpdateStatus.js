import React, { useEffect,useState } from 'react';
import { useLocalStorage } from '../LocalStorage/Local';
import firebase from '../Database/Database'
import { Row,Col,Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';

const UpdateStatus = ({match}) => {

    const [name, setName] = useLocalStorage('username', 'null');
    const [data , setdata] = useState('');
    const [state, setstate] = useState({
        statu:"",
        eror:""
    });
    const history = useHistory();

        useEffect(async() => {
            const db=firebase.collection('Booking').doc(match.params.id).get()
                .then(snapshot => setdata(snapshot.data()))
          },[]);

        const updateStauts = async () =>{
            const db = firebase.collection('Booking');
            const docRef =await db.doc(match.params.id).update({
            status:state.status
            });
          }

          const chngstatus = async () =>{
              if(!state.statu || state.statu =='Change Status'){
                  setstate({...state, eror:'Select Status'});
              }
              else{
                const db = firebase.collection('Booking');
                const docRef =await db.doc(match.params.id).update({
                    status : state.statu
                });
                setstate({...state, eror:''});
                history.push("/Dorder")
              }
          }

    return (  
        <div>  
            <h1>{data.sname}</h1>
            <Row>
                <Col><th>Date : </th><th>{data.fdate}</th></Col>
            </Row>
            <Row>
                <Col><th>Function Type : </th><th>{data.ftype}</th></Col>
            </Row>
            { data.ftime ? 
            <Row>
            <Col><th>Function Time : </th><th>{data.ftime}</th></Col>
            </Row>
            : 
            <p></p>}
            { data.venue ? 
            <Row>
            <Col><th>Venue : </th><th>{data.venue}</th></Col>
            </Row>
            : 
            <p></p>}
            { data.nopeople ? 
            <Row>
            <Col><th>Number of People : </th><th>{data.nopeople}</th></Col>
            </Row>
            : 
            <p></p>}
            <Row>
                <Col><th>Status : </th><th>{data.status}</th></Col>
            </Row>
            <select
             id="dropdown" 
             value={state.statu}
             onChange={e => setstate(state=>({...state, statu: (e.target.value)}))}
                        >
                        <option value="">Select Status</option>
                        <option value="Accept">Accept</option>
                        <option value="Reject">Reject</option>
                        </select>
            <Button onClick={chngstatus}>Change Status</Button>
            <p>{state.eror}</p>
        </div>
    );
}
 
export default UpdateStatus;