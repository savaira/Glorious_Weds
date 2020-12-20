import React, { Component } from 'react';
import './Sidebar.css'


const Sidebar = (props) => {
 
    return ( 
      
      <div >
       
      <h1 >{props.user}</h1>
      <lu >
    <li>{props.item1}</li>
    <li>{props.item2}</li>
    <li>{props.item3}</li>
    <li>{props.item4}</li>
    <li>{props.item5}</li>
    <li>{props.item6}</li>
      </lu>
    </div>
     );
}
 
export default Sidebar;