import React, { useEffect,useState } from 'react';
import { useLocalStorage } from '../LocalStorage/Local';
import firebase from '../Database/Database'
import { Row,Col, Container } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import './UpdateStatus.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B  90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    marginLeft:'-940px',
    marginTop:'20px',
    padding: '0 30px',
    '&:hover': {
      color: 'black'
  }
  },
});
const UpdateStatus = ({match}) => {
    const classes = useStyles();
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
           
            <h1 className="dname">{data.sname}</h1>
            <Container className="dService">
            <Row   className="dStatus">
                <Col><th  >Customer Email : </th><th className="dstat">{data.cemail}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th  >Date : </th><th className="dstat">{data.fdate}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th   >Function Type : </th><th className="dstat">{data.ftype}</th></Col>
            </Row>
            { data.ftime ? 
            <Row   className="dStatus">
            <Col ><th >Function Time : </th><th className="dstat">{data.ftime}</th></Col>
            </Row>
            : 
            <p></p>}
            { data.venue ? 
            <Row   className="dStatus">
            <Col><th  >Venue : </th><th className="dstat">{data.venue}</th></Col>
            </Row>
            : 
            <p></p>}
            { data.nopeople ? 
            <Row>
            <Col><th   className="dStatus">Number of People : </th><th className="dstat">{data.nopeople}</th></Col>
            </Row>
            : 
            <p></p>}
            <Row   className="dStatus">
                <Col><th  >Price : </th><th className="dstat">{data.price}</th></Col>
            </Row>
            <Row   className="dStatus">
                <Col><th  >Status : </th><th className="dstat">{data.status}</th></Col>
            </Row>
            <select
            className="dStatus"
             id="dropdown" 
             value={state.statu}
             onChange={e => setstate(state=>({...state, statu: (e.target.value)}))}
                        >
                        <option value="">Select Status</option>
                        <option value="Accept">Accept</option>
                        <option value="Reject">Reject</option>
                        </select>
                        <Row>
                            <Col>
                            <Button className={classes.root}  onClick={chngstatus}>Change Status</Button>
                            </Col>
                        </Row>
            
            <p>{state.eror}</p>
            </Container> 
        </div>
    );
}
 
export default UpdateStatus;