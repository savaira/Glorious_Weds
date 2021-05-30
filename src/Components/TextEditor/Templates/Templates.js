import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import Template1 from './Template1/Template1'
import Template2 from './Template2/Template2'
import Template3 from './Template3/Template3'
import Template4 from './Template4/Template4'
import Template5 from './Template5/Template5'


const Templates = (props) => {
 
    const {bname,gname,bfname,gfname,venue,ftype,dtime,error,tempno} =
    (props.location && props.location.field) || {};
    return ( 
        <div>
        <Container style={{marginLeft:"30px",marginTop:"30px"}}>
        { tempno == '1' ?  <Template1 name={props}/> : 
        tempno == '2' ?  <Template2 name={props}/> :
        tempno == '3' ?  <Template3 name={props}/> :
        tempno == '4' ?  <Template4 name={props}/> :
        <Template5 name={props}/>
        }
            </Container> 
     </div>
     );
}
 
export default Templates;
