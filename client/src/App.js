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
import FlightsTest from "./components/flightsTest";

function App() {
  return (
    <Router>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/books"]}>
              <Books />
            </Route>
            <Route exact path="/books/:bookid">
              <Detail />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/flightsTest">
              <FlightsTest />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
