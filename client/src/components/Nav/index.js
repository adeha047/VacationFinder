import React, {useState, Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import './style.scss';

function Nav() {
  return (
    
    <nav>
      <div>
        <h1>VACATION FINDER</h1>
      </div>  
      <ul className="navlinks">
          <li className = "link"><a href='#'>HOME</a></li>
          <li className = "link"><a href='#'>ABOUT</a></li>
          <li className = "link"><a href='#'>ACCOUNT</a></li>
          <li className = "link"><a href='#'>QUESTIONAIRE</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
