import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 

import Renter from"./components/Renter";
import Home from"./components/Home";
import Owner from "./components/Owner";
import LoginForm from "./components/LoginForm";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Router>
      <div>
        <header className="nav">
          <div>
            <img src="https://unsplash.it/200/200"/> 
          </div>
          <div className="menu">
          <Link to="/">home</Link>
          <Link to="/login">login</Link>
          <Link to="/owner">Register</Link>
          </div>
        </header>

 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  exact path="/renter" component={Renter}/>
          <Route exact path="/owner" component={Owner}/>
          <Route exact path="/login" component={LoginForm}/>
        </Switch>
        </div>
      
    </Router>
  );
}

export default App;
