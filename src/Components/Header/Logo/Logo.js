import React from 'react';
import Log from './logo3.png';
import './Logo.css'
import {Link} from 'react-router-dom'

function Logo() {
    return (
          <Link to="/Home">
          <img src={Log} alt="logo"className="pic"/>
          </Link> 
    );
}

export default Logo;