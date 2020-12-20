import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Signbtn.css'


const Signbtn = () => {
    return ( 
        <div class="text-centre">
          <Link to="/Login" className="reg">Already Registered</Link>        
      </div>
     );
}
 
export default Signbtn;