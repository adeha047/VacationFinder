import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserContext from "./utils/UserContext";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
