import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from './Navigation'
import Home from './Home'
import Tech from './Technology'
import Footer from './Footer'
import "firebase/analytics";
import firebase from 'firebase/app'
import firebaseConfig from './../config'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/technology" component={ Tech } />
    </Switch>
    <Footer />
  </Router>
);

export default App;
