import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Template1.css";
import dg1 from "./dg1.png";

const Template1 = () => {
  const [fieldData,setfieldData]=useState({
    input1:"Mr. Khalid Riaz Butt",
    input2:"Requests the honour of your presence at the Wedding Ceremony of her beloved daughter",
    input3:"Shahtaj Khalid with",
    input4:"Ata ul Mustafa",
    input5:"Barat",
    input6:"Saturday, 24 October,2020",
    input7:"6:30 pm",
    input8:"Venue",
    input9:"Celebrations Marquee F-752, 6 Road Satellite Town Rawalpindi"
  })
  return (
    <div>
      <Container className="design1">
        <Row>
          <Col>
            <img src={dg1} height="140px" width="140px" className="dgpic1" />
          </Col>
          <Col >
          <input className="fatherName" value={fieldData.input1}/>
          </Col> 
        </Row>
        <Row>
            <Col>
            <textarea className="inviteArea"
            value={fieldData.input2} 
            onChange={e => setfieldData({...fieldData ,input2 : e.target.value})}
            rows="2" cols="47"/>
          </Col>
            </Row>
        <Row>
            <Col>
            <input />
          </Col>
            </Row>
           
            <Row>
            <Col>
            <input />
          </Col>
            </Row>
            <Row>
            <Col>
            <input />
          </Col>
            </Row> 
          <Col>
            <img src={dg1} height="140px" width="140px" className="dgpic2" />
          </Col>
        
      </Container>
    </div>
  );
};

export default Template1;
