import React from 'react';
import c1 from './c1.jpg'
import './ViewTemplates.css'
import {Card,Button, Container,Row,Col} from 'react-bootstrap';
const ViewTemplates = () => {

    return ( 
        <div>
          <h1 className="viewTemp">Templates</h1>
            <Container>
            
                <Row>
                    <Col sm={4}>
                    <Card style={{ width: '18rem',height:'28rem',backgroundColor:'gray'}}>
  <Card.Img variant="top" src={c1} />
  <Card.Body>
    <Card.Text>
      <b>Size:</b> 11.2x22.1
      <br></br>
      <b>Colors:</b> blue,red
    </Card.Text>
    <Button variant="primary">Customize</Button>
  </Card.Body>
</Card>
</Col>
<Col sm={4}>
<Card style={{ width: '18rem',height:'28rem',backgroundColor:'gray'}}>
  <Card.Img variant="top" src={c1} />
  <Card.Body>
   
    <Card.Text>
    <b>Size:</b> 11.2x22.1
      <br></br>
      <b>Colors:</b> blue,red
    </Card.Text>
    <Button variant="primary">Customize</Button>
  </Card.Body>
</Card>
</Col>
<Col sm={4}>
<Card style={{ width: '18rem',height:'28rem',backgroundColor:'gray'}}>
  <Card.Img variant="top" src={c1} />
  <Card.Body>
    
    <Card.Text>
    <b>Size:</b> 11.2x22.1
      <br></br>
      <b>Colors:</b> blue,red
    </Card.Text>
    <Button variant="primary">Customize</Button>
  </Card.Body>
</Card>
</Col>
              </Row>
           <Row>
           <Col sm={4}>
                    <Card style={{ width: '18rem',height:'28rem',backgroundColor:'gray'}}>
  <Card.Img variant="top" src={c1} />
  <Card.Body>
    <Card.Text>
      <b>Size:</b> 11.2x22.1
      <br></br>
      <b>Colors:</b> blue,red
    </Card.Text>
    <Button variant="primary">Customize</Button>
  </Card.Body>
</Card>
</Col>
<Col sm={4}>
<Card style={{ width: '18rem',height:'28rem',backgroundColor:'gray'}}>
  <Card.Img variant="top" src={c1} />
  <Card.Body>

    <Card.Text>
    <b>Size:</b> 11.2x22.1
      <br></br>
      <b>Colors:</b> blue,red
    </Card.Text>
    <Button variant="primary">Customize</Button>
  </Card.Body>
</Card>
</Col>
           </Row>
            </Container>
            
        </div>
     );
}
 
export default ViewTemplates;