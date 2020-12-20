import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Logo from './Logo/Logo'
import Glorious from './Glorious/Glorious'
import SignText from './SignupText/SignText'
import './Header.css'
function Header(props) {
    return (
      <div className="head">
        <div className="row p-3">
          <div className="col-2">
            <Logo/>
          </div>
          <div className="col">
            <Glorious/>
          </div>
          <div className="col-2">
            <SignText/>
          </div>
        </div>
        </div>
    );
}

export default Header;