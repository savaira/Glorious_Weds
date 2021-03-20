import React from 'react'
import { Container } from 'react-bootstrap'
import Template1 from './Template1/Template1'
import Template2 from './Template2/Template2'
import Template3 from './Template3/Template3'
import Template4 from './Template4/Template4'
import Template5 from './Template5/Template5'
export default function Templates() {
    return (
        <div>
           <Container style={{marginLeft:"30px",marginTop:"30px"}}>
           <Template1></Template1>
               </Container> 
        </div>
    )
}
