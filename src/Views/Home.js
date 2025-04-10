import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {CASESTUDIES, renderJumbotron} from "./CaseStudies";

class Home extends Component {

    render() {
        return (
            <div className="container">
                <blockquote className="blockquote">
                    <p className="mt-5 mb-5" style={{fontSize: 21}}>I am a <span
                        style={{color: 'blue', fontWeight: 700}}>Product Designer</span> dedicated to crafting solutions that enhance everyday experiences. Check out my latest project below.</p>
                </blockquote>

                {renderJumbotron(CASESTUDIES[0])}

                <p className="text-center"><Link to="/case-studies" style={{padding: '14px 90px'}}
                                                 className="btn btn-dark mt-5 mb-5">VIEW ALL</Link></p>

            </div>
        );
    }
}

export default Home;
