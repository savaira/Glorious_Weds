import React from 'react';
import {Link} from 'react-router-dom'


const Copyright = () => {
    return ( 
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <Link to="/Home"> Glorious Weds.com</Link>
        </div>

     );
}
 
export default Copyright;