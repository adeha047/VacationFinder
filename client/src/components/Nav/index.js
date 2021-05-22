import React, {useState, Fragment, useContext} from "react";

import { Link } from "react-router-dom";
import './nav.css';

function Nav() {
  return (
    
    <nav>
      <div>
        <h1>VACATION FINDER</h1>
      </div>  
      <ul className="navlinks">
          <li><Link to = {"/home"}>HOME</Link></li>
          <li><Link to = {"/about"}>ABOUT</Link></li>
          <li><Link to = {"/login"}>ACCOUNT</Link></li>
          <li><Link to = {"/questionaire"}>QUESTIONAIRE</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;
