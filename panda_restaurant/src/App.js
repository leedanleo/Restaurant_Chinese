import React from 'react';
import './App.css';

import Title from "./components/title";
import Home from "./components/home";
import Menu from "./components/menu";
import Appetizer from "./components/appetizer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="App">
        <Title/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/appetizer" component={Appetizer}/>
          </Switch>
        </div>
      </Router>
    );  
  }

};
