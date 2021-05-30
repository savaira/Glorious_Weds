import React from 'react';
import cd1 from './cd1.PNG'
import cd2 from'./cd2.PNG'
import cd3 from './cd3.PNG'
import cd4 from './cd4.PNG'
import cd5 from './cd5.PNG'

import './ViewTemplates.css'
import { useHistory} from 'react-router-dom';
import {Card, Container,Row,Col} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg'
const ViewTemplates = () => {
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
  const classes = useStyles();
  const history = useHistory();
  const inputdata = (selectedtemp) =>{
    history.push(`/InputData/${selectedtemp}`);
  }
    return ( 
        <div>
          <h1 className="viewTemp">Templates</h1>
            <Container style={{marginTop:'5%'}}>
            
                <Row>
                    <Col sm={4}>
                    <Card style={{ width: '18rem',height:'20rem',backgroundColor:'gainsboro',border:"solid 4px #875c9f",borderRadius:"7px 7px 70px 70px"}}>
  <Card.Img variant="top" src={cd1} />
  <Card.Body>
    <Card.Text>
      <b>Size:</b> 22x10.5
    
    </Card.Text>
    <br></br>
    <Button className={classes.root}  onClick={() => inputdata(1)}>Customize</Button>
  </Card.Body>
</Card>
</Col>
<Col sm={4}>
<Card style={{ width: '18rem',height:'20rem',backgroundColor:'gainsboro',border:"solid 4px #875c9f",borderRadius:"7px 7px 70px 70px"}}>
  <Card.Img variant="top" src={cd2} />
  <Card.Body>
   
    <Card.Text>
    <b>Size:</b> 21.5x11.5
    
    </Card.Text>
    <br></br>
    <Button className={classes.root}  onClick={() => inputdata(2)}>Customize</Button>
  </Card.Body>
</Card>
</Col>
<Col sm={4}>
<Card style={{ width: '18rem',height:'20rem',backgroundColor:'gainsboro',border:"solid 4px #875c9f",borderRadius:"7px 7px 70px 70px"}}>
  <Card.Img variant="top" src={cd3} />
  <Card.Body>
    
    <Card.Text>
    <b>Size:</b> 21.5x11.5
    
    </Card.Text>
    <br></br>
    <Button className={classes.root} onClick={() => inputdata(3)}>Customize</Button>
  </Card.Body>
</Card>
</Col>
              </Row>
           <Row style={{marginTop:"5%"}}>
           <Col sm={4}>
                    <Card style={{ width: '18rem',height:'20rem',backgroundColor:'gainsboro',border:"solid 4px #875c9f",borderRadius:"7px 7px 70px 70px"}}>
  <Card.Img variant="top" src={cd4} />
  <Card.Body>
    <Card.Text>
      <b>Size:</b> 22x10.5
      
    </Card.Text>
    <br></br>
    <Button className={classes.root} onClick={() => inputdata(4)}>Customize</Button>
  </Card.Body>
</Card>
</Col>
<Col sm={4}>
<Card style={{ width: '14rem',height:'28rem',backgroundColor:'gainsboro',border:"solid 4px #875c9f",borderRadius:"7px 7px 70px 70px"}}>
  <Card.Img style={{width:'13.4rem',height:'17rem'}} variant="top" src={cd5} />
  <Card.Body>

    <Card.Text>
    <b>Size:</b> 12.7x17.78
     
    </Card.Text>
    <br></br>
    <Button className={classes.root}  onClick={() => inputdata(5)}>Customize</Button>
  </Card.Body>
</Card>
</Col>
           </Row>
          
            </Container>
           
        </div>
     );
}
 
export default ViewTemplates;
