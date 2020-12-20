import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Signbtn = () => {
    return ( 
        <div class="text-centre">
          <Link to="/Login">Already Registered</Link>        
      </div>
     );
}
 
export default Signbtn;