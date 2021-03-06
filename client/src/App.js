import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminForm from "./pages/AdminForm/AdminForm";
import UserHome from "./pages/UserHome/UserHome";
import AdminHome from "./pages/AdminHome/AdminHome";
import AlertPage from './pages/AlertPage/AlertPage';
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AdminForm" component={AdminForm} />
        <Route exact path="/UserHome" component={UserHome} />
        <Route exact path="/AdminHome" component={AdminHome} />
        <Route exact path="/alerts/:id" component={AlertPage} />
        <Route exact path='/login' component={LogIn} />
      </Switch>
    </div>
  </Router>
);

export default App;
