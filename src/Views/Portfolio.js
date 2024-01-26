import React from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import About from './About';
import Home from './Home';
import DesignGallery from './DesignGallery';
import CaseStudies from './CaseStudies';
import Santa from './Santa';
import FarmFresh from './FarmFresh';

class Portfolio extends React.Component {

    state = { expanded: false };

    render() {
        return (
            <Router>
                <header className="container">
                    <nav className="p-0 mt-4 mb-4 navbar navbar-expand-lg navbar-light bg-light">
                        <button onClick={e => this.setState({expanded:!this.state.expanded})} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/old-portfolio">SAMMIE KHALIL</Link>

                        <div className={this.state.expanded ? 'collapse show navbar-collapse' : 'collapse navbar-collapse'} id="mainMenu">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><NavLink className="nav-link" to="/old-portfolio/case-studies">CASE STUDIES</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/old-portfolio/design">DESIGN</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/old-portfolio/about">ABOUT</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <Switch>
                    <Route path="/old-portfolio/about">
                        <About />
                    </Route>
                    <Route path="/old-portfolio/design">
                        <DesignGallery />
                    </Route>
                    <Route path="/old-portfolio/case-studies/farm-fresh">
                        <FarmFresh />
                    </Route>
                    <Route path="/old-portfolio/case-studies/santa">
                        <Santa />
                    </Route>
                    <Route path="/old-portfolio/case-studies">
                        <CaseStudies />
                    </Route>
                    <Route path="/old-portfolio">
                        <Home />
                    </Route>
                </Switch>

                <footer className="p-5 mt-5">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link style={{color:'#434343'}} className="navbar-brand" to="/old-portfolio">&copy; 2020, Sammie Khalil</Link>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" target="_blank" href="mailto:get@sammietaylor.com">Contact</a></li>
                                <li className="nav-item"><a className="nav-link" target="_blank" href="https://twitter.com/sammxdesign">Twitter</a></li>
                                <li className="nav-item"><a className="nav-link" target="_blank" href="https://dribbble.com/sammxdesign">Dribbble</a></li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default Portfolio;
