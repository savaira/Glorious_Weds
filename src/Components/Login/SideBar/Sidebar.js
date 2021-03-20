import React, { Component } from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom';
class Sidebar extends Component {
  
  state = {
    service: [
      "Car Rental",
      "Catering",
      "Decorators",
      "Event Manager",
      "Photography",
      "Saloons",
      "Wedding Hall",
    ]
  };
  render() {
    return (
      <div>
        <h1 className="deal">We Deals in</h1>
        <ul>
          {this.state.service.map((service) => (
    <Link style={{textDecoration:"none"}} to={`/Servic/${service}`}><li className="servicelist"
            key={service} 
            >
              {service}
            </li></Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
