import React, { Component } from "react";
import "./Sidebar.css";

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
            <li className="servicelist"
            key={service} 
           href="#features">
              {service}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
