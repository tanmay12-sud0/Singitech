import React from "react";
import {Switch, Route } from 'react-router-dom';
import Header from './Header'
import './App.css';
import Home from "./Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./auth/Register";
import RegisterComplate from "./auth/complateRegister";
import Login from "./auth/Login";
import Forgot from './auth/Forget'
import Music from "./auth/Music";
function App() {
  return (
    <div className="app">
     <Header />
     <ToastContainer />
      <Switch>
      <Route exact path="/music">
              <Music />
         </Route>
      <Route exact path="/forget/password">
              <Forgot />
         </Route>
      <Route exact path="/login">
              <Login />
         </Route>
      <Route exact path="/register/complete">
              <RegisterComplate />
         </Route>
      <Route exact path ="/register">
              <Register />
         </Route>
      <Route exact path="/">
              <Home />
         </Route>
      </Switch>
    </div>
  );
}

export default App;
