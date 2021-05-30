import React, { useState , useEffect } from 'react';
import {Form,Row,Col, Container} from 'react-bootstrap';
import './InputData.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory} from 'react-router-dom';
import one from './cd1.PNG'
import two from './cd2.PNG'
import three from './cd3.PNG'
import four from './cd4.PNG'
import five from './cd5.PNG'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
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

const InputData = ({match}) => {

  const classes = useStyles();
  const history = useHistory();
  const[s,sets]=useState();
  const[temp,settemp]=useState(''); 
  const[field,setfield]=useState({
    bname:'',
    gname:'',
    bfname:'',
    gfname:'',
    venue:'',
    ftype:'',
    dtime:'',
    error:'',
    tempno:''
});

  useEffect(async() => {
    if(match.params.temp == 1){
      sets(one)
      setfield({...field, tempno: '1' });
    }
    else if(match.params.temp == 2){
      sets(two)
      setfield({...field, tempno: '2' });
    }
    else if(match.params.temp == 3){
      sets(three)
      setfield({...field, tempno: '3' });
    }
    else if(match.params.temp == 4){
      sets(four)
      setfield({...field, tempno: '4' });
    }
    else{
      sets(five)
      setfield({...field, tempno: '5' });
    }
  },[match.params.temp]);

  const editor = () =>{
    if(!field.bname){
      setfield({...field, error: 'Enter Bride Name' });
    }
    else if(!field.gname){
      setfield({...field, error: 'Enter Groom Name' });
    }
    else if(!field.bfname){
      setfield({...field, error: 'Enter Bride Father Name' });
    }
    else if(!field.ftype){
      setfield({...field, error: 'Enter Function Type' });
    }
    else if(!field.fdate){
      setfield({...field, error: 'Enter Function Date' });
    }
    else if(!field.dtime){
      setfield({...field, error: 'Enter Fumction Time' });
    }
    else if(!field.venue){
      setfield({...field, error: 'Enter Venue' });
    }
    else {
      history.push({pathname:"/Templates",
      field
    });
    }
  }

    return ( 

     <div>
       <img style={{marginTop:'5%'}} src={s}/>
         <h3 style={{marginTop:'5%'}} >Please enter the following fields</h3>
        <Container>
          <Form className="sign-field" >
            <Row >
              <Col >
                <Form.Control 
            placeholder="Bride name"
            value={field.bname} 
            onChange={e => setfield({...field ,bname : e.target.value})}
            />
          </Col>
          <Col>
            <Form.Control 
            placeholder="Groom name" 
            value={field.gname} 
            onChange={e => setfield({...field ,gname : e.target.value})}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
          <Form.Control 
            placeholder="Bride's Father name" 
            value={field.bfname} 
            onChange={e => setfield({...field ,bfname : e.target.value})}
            />
          </Col>
          <Col>
            <Form.Control 
         
            placeholder="Function Type" 
            value={field.ftype} 
            onChange={e => setfield({...field ,ftype : e.target.value})}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
          <Form.Control 
            placeholder="Venue" 
            value={field.venue} 
            onChange={e => setfield({...field ,venue : e.target.value})}
            />
          </Col>
          <Col>
          <Form.Control 
            placeholder="Function Date" 
            value={field.fdate} 
            onChange={e => setfield({...field ,fdate : e.target.value})}
            />
          </Col>
        </Row>
        <Row className="sign-field">
        <Col>
        <Form.Control 
        className="sign-up"
            placeholder="Function Time" 
            value={field.dtime} 
            onChange={e => setfield({...field ,dtime : e.target.value})}
            />
          </Col>
         
        </Row>
        <h6 style={{color:'red'}}>{field.error}</h6>
        <Row>
        <Button  
              className={classes.root} 
              style={{marginTop:"10px",marginLeft:"500px"}} 
              onClick={editor}
            >
                Submit
          </Button> 
        </Row>
        
      </Form>
        </Container> 
     </div>
             
    );
}
 
export default InputData;
