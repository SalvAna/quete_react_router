import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './notre-histoire';
import "./App.css"


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <NavLink to="/" activeClassName="selected"> Accueil </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/notre-histoire" component={History} /> 
              </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;