import React, { Component } from 'react';
import './ServicesNames.css'
const Names = (props) => {
    return ( 
        <div>
            <lu className="names">
    <li>{props.item1} </li>
    <li>{props.item2} </li>
    <li>{props.item3}</li>
    <li>{props.item4}</li>
    <li>{props.item5}</li>
    <li>{props.item6}</li>
    <li>{props.item7}</li>
    <li>{props.item8}</li>
    <li>{props.item9}</li>
      </lu>
        </div>
     );
}
 
export default Names;