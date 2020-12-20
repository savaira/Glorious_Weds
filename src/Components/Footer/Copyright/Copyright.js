import React from 'react';
import {Link} from 'react-router-dom'
import './Copyright.css'


const Copyright = () => {
    return ( 
        <div class="footer-copyright text-center py-3" className="copy">© 2020 Copyright:
          <Link to="/Home" className="web"> Glorious Weds.com</Link>
        </div>

     );
}
 
export default Copyright;