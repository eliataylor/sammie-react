import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import About from './Views/About';
import Home from './Views/Home';
import DesignGallery from './Views/DesignGallery';
import CaseStudies from './Views/CaseStudies';
import Santa from './Views/Santa';
import FarmFresh from './Views/FarmFresh';

class App extends React.Component {

  state = { expanded: false };

  render() {
    return (
      <Router>
          <header className="container">
            <nav className="p-0 mt-4 mb-4 navbar navbar-expand-lg navbar-light bg-light">
              <button onClick={e => this.setState({expanded:!this.state.expanded})} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">SAMMIE KHALIL-TAYLOR</Link>

              <div className={this.state.expanded ? 'collapse show navbar-collapse' : 'collapse navbar-collapse'} id="mainMenu">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><NavLink className="nav-link" to="/case-studies">CASE STUDIES</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/design">DESIGN</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/about">ABOUT</NavLink></li>
                </ul>
              </div>
            </nav>
          </header>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/design">
              <DesignGallery />
            </Route>
            <Route path="/case-studies/farm-fresh">
              <FarmFresh />
            </Route>
            <Route path="/case-studies/santa">
              <Santa />
            </Route>
            <Route path="/case-studies">
              <CaseStudies />
            </Route>
          </Switch>

          <footer className="p-5">
            <div className="container">
              <nav className="navbar navbar-expand-lg">
                <Link style={{color:'#434343'}} className="navbar-brand" to="/">&copy; 2020, Sammie Khalil</Link>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><Link className="nav-link" to="/case-studies">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/design">Twitter</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">Dribble</Link></li>
                </ul>
              </nav>
            </div>
          </footer>
      </Router>
    );
  }
}

export default App;
