import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserContext from "./utils/UserContext";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";

function App() {
  return (
  <Router>
   <Nav/>
   <Route path = "/home" component={Home}/>
   <Route path = "/" component={Home}/>
   </Router>
  )
}

export default App;
