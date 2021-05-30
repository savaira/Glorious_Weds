import React, { Component } from 'react';
import {Row,Col,Button} from 'react-bootstrap'
import './SelectService.css'
class SelectService extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectCategory: "",
        selectCity:""
      };
  
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
      this.handleDropdown = this.handleDropdown.bind(this);
    }
  
    handleDropdownChange(e) {
      this.setState({ selectCategory: e.target.value });
    }
    handleDropdown(e) {
        this.setState({ selectCity: e.target.value });
      }
    
  
    render() {
      return (
        <div>
          <div>
              <Row>
                  <Col className="col-2">
                  <div className="service-sel">
              <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="Car Rentals">Car Rentals</option>
                <option value="Catering">Catering</option>
                <option value="Decorators">Decorators</option>
                <option value="Event Managers">Event Managers</option>
                <option value="Photography">Photography</option>
                <option value="Saloon">Saloon</option>
                <option value="Wedding Halls">Wedding Halls</option>
 
              </select>
            </div>
          
                  </Col>
                  <Col className="col-1">
                  <div className="service-sel">
              <select id="dropdown" onChange={this.handleDropdown}>
              <option value="Islamabad">Islamabad</option>
  <option value="Rawalpindi">Rawalpindi</option>
  
 
              </select>
            </div>
                  </Col>
                  <Col className="service-sel col-1 btnsear">
                  <Button>Search</Button>
                  </Col>
              </Row>
           
              <div className="sear m-4">You have searched {this.state.selectCategory} in {this.state.selectCity}</div>
          </div>
        </div>
      );
    }
  }
  export default SelectService;