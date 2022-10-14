import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./Views/Landing";
import Portfolio from "./Views/Portfolio";

class App extends React.Component {

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/old-portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
