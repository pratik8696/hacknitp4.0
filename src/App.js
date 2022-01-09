import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './components/homepage/HomePage';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/timer">
            <Timer/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
