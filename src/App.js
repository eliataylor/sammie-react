import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./Views/Landing";
import Portfolio from "./Views/Portfolio";

class App extends React.Component {

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/splash">
              <Landing />
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
