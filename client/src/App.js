import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Questionaire from "./pages/Questionaire"; 
import Location from "./pages/Location";
import UserContext from "./utils/UserContext";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";


function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);
  return (
    <Router>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
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
          <Route exact path="/questionaire">
            <Questionaire/>
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/locations">
            <Location/>
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
