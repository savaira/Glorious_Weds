import React, { Component } from 'react';

class Services extends Component {
  state ={
    footlink : ["Design Card","Stage Decor","About Us","Contact Us"]
  };
  render(){
    return ( 
        <div class="container-fluid text-center text-md-left">
          <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled" >
              {this.state.footlink.map(footlink => <li key={footlink}><a href="#!">{footlink}</a></li>)}
            </ul>
        </div>
     );
    }
}
 
export default Services;