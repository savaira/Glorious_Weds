import React, { Component } from 'react';
import Navigationbar from './Navbar/Navigationbar'
import { Route} from 'react-router-dom';
const Navigation = () => {
    return (
        <Route>
        <div>
            <Navigationbar/>
        </div>
       </Route>
     );
}
 
export default Navigation;