import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 
import './styles/HomeStyles.css'
import Renter from"./components/Renter";
import Home from"./components/Home";
import Owner from "./components/Owner";
import LoginForm from "./components/LoginForm";
import TechItems from "./components/TechItems";
import Add from"./components/Add";
import Edit from"./components/Edit";
import SignUp from"./components/SignUp";
import {clearState} from "./action";
import {connect} from"react-redux"

// luiza, alex and jessica worked on this
//we just used one computer via parsec and vscode extention liveshare

function App(props) {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  const logoutFunc = ()=> {
    window.localStorage.removeItem("token");
    props.clearState();

  }
  return (
    <Router>
      <div>
     
        <header className="nav">
          <div >
            <img src="https://i.ibb.co/Bs03hDk/download.png" style={{width:"80px" }}/> 
          </div>
          <div className="menu">
          <Link to="/">home</Link>
          <Link to="/login">login</Link>
          {/* <Link to="/owner">Register</Link> */}
          <Link to="/owner">Owner's Page</Link>
          <Link to="/renter">Renter's Page</Link>
          <Link to="/Add">Add Page</Link>
          <Link to="/SignUp">SignUp Page</Link>
          <Link to="/login" onClick={logoutFunc}>logout</Link>
      
          </div>
        </header>

 
        <Switch>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/Edit" component={Edit}/>
          <Route exact path="/Add" component={Add}/>
          <Route exact path="/" component={Home}/>
          <Route  exact path="/renter" component={Renter}/>
          <Route exact path="/owner" component={Owner}/>
          <Route exact path="/login" component={LoginForm}/>
        </Switch>
        </div>
      
    </Router>
  );
}
const mapStateToProps = (state)=>{
  return(state)
}


export default connect(mapStateToProps, {clearState})(App);
