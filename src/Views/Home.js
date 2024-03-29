import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {

    render() {
        return (
          <div className="container">
            <blockquote className="blockquote">
              <p className="mt-5 mb-5" style={{fontSize:21}}>I am a <span style={{color:'blue', fontWeight:700}}>UX Designer</span> passionate about solving problems and using my skills to improve the lives of others. Check out my most recent project featured below.</p>
            </blockquote>

            <div className="jumbotron d-flex flex-column" style={{backgroundImage:'url(/assets/Desktop-Img.jpg)'}}>
              <div className="flex-grow-1"></div>
              <div className={'p-4'}>
                <h3>Farm Fresh</h3>
                <p className="fontLight mb-4 mt-4">Buying produce directly from<br /> farmers has never been easier</p>
                <Link to="/old-portfolio/case-studies/farm-fresh" style={{fontSize:15, fontWeight:600, padding:'15px 44px'}} className="btn btn-outline-light btn-lg">VIEW CASE STUDY</Link>
              </div>
            </div>

            <p className="text-center"><Link to="/old-portfolio/case-studies" style={{padding:'14px 90px'}} className="btn btn-dark mt-5 mb-5">VIEW ALL</Link></p>

          </div>
        );
    }
}

export default Home;
