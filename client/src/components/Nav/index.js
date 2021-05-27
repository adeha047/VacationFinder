import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import './nav.css';

function Nav() {
  const {loggedIn} = useContext(UserContext);
  return (
    
    <nav>
      <div>
        <h1>VACATION FINDER</h1>
      </div>  
      <ul className="navlinks">
          <li><Link to = {"/home"}>HOME</Link></li>
          <li><Link to = {"/about"}>ABOUT</Link></li>
          <li><Link to = {"/questionaire"}>QUESTIONAIRE</Link></li>
          <li><Link to = {"/signup"}>SIGN-UP</Link></li>
          {loggedIn ?
            <li><Link to= {"/logout"}>LOGOUT</Link></li>
            :
            <li><Link to = {"/login"}>LOGIN</Link></li>
          }
        </ul>
    </nav>
  );
}

export default Nav;
