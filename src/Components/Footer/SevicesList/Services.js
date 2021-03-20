import React, { Component } from 'react';
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {
  const navb=[
    {name : "Design Cards" , lnk : "/ViewTemplates"},
    {name : "Stage Decor" , lnk : "#features"},
    {name : "About Us" , lnk : "/AboutUs"},
    {name : "Contact Us" , lnk : "/Contact"}
];
  return ( 
    <div class="container-fluid text-center text-md-left">
      <h5 class="text-uppercase" className="serv">Links</h5>
        <ul class="list-unstyled" >
        {navb.map(navb =>
                    <Link className="servlist" key={navb} to={navb.lnk} ><li>{navb.name}</li></Link>)}
        </ul>
    </div>
 );
}
 
export default Services;