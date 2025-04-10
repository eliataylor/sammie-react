import React from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Home from './Home';
import DesignGallery from './DesignGallery';
import CaseStudies from './CaseStudies';
import Santa from './Santa';
import FarmFresh from './FarmFresh';
import About from "./About";
import Wbat from "./Wbat";
import Snonav from "./Snonav";
import Florul from "./Florul";
import ScrollToTop from "../ScrollToTop";

class Portfolio extends React.Component {

    state = {expanded: false};

    render() {
        return (
            <Router>
                <ScrollToTop/>
                <header className="container">
                    <nav
                        className="d-flex justify-content-between p-0 mt-4 mb-4 navbar navbar-expand-lg navbar-light bg-light">
                        <button onClick={e => this.setState({expanded: !this.state.expanded})}
                                className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu"
                                aria-controls="mainMenu"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">SAMMIE KHALIL-TAYLOR</Link>

                        <div
                            className={this.state.expanded ? 'collapse show navbar-collapse' : 'collapse navbar-collapse'}
                            id="mainMenu" style={{flexGrow: 'initial'}}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><NavLink className="nav-link" to="/case-studies">CASE
                                    STUDIES</NavLink></li>

                                <li className="nav-item"><NavLink className="nav-link" to="/about">ABOUT</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/design">ARCHIVES</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/design">
                        <DesignGallery/>
                    </Route>
                    <Route path="/case-studies/farm-fresh">
                        <FarmFresh/>
                    </Route>
                    <Route path="/case-studies/santa">
                        <Santa/>
                    </Route>
                    <Route path="/case-studies/snonav">
                        <Snonav/>
                    </Route>
                    <Route path="/case-studies/wbat">
                        <Wbat/>
                    </Route>
                    <Route path="/case-studies/florul">
                        <Florul/>
                    </Route>
                    <Route path="/case-studies">
                        <CaseStudies/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>

                <footer className="p-5 mt-5">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link style={{color: '#434343'}} className="navbar-brand" to="/">&copy; 2025, Sammie
                                Khalil-Taylor</Link>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" target="_blank"
                                                            href="mailto:sammie.a.khalil@gmail.com">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default Portfolio;
